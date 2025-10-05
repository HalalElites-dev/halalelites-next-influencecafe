// app/api/checkout/create-session/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
})

export async function POST(req: NextRequest) {
  try {
    const { items, customerInfo, totals } = await req.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 })
    }

    // ✅ Use service role key for inserts
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.SUPABASE_SERVICE_ROLE_KEY as string
    )

    // Create order in database first
    const deliveryFee = customerInfo.orderType === 'delivery' ? 3.99 : 0
    const finalTotal = totals.total + deliveryFee

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: customerInfo.customerName,
        customer_phone: customerInfo.customerPhone,
        customer_email: customerInfo.customerEmail,
        order_type: customerInfo.orderType,
        delivery_address: customerInfo.deliveryAddress,
        total_amount: finalTotal,
        special_instructions: customerInfo.specialInstructions,
        status: 'payment_pending',
      })
      .select()
      .single()

    if (orderError || !order) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    // Create order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      menu_item_id: item.id,
      menu_item_name: item.name,
      menu_item_price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    }))

    const { error: itemsError } = await supabase.from('order_items').insert(orderItems)

    if (itemsError) {
      console.error('Order items error:', itemsError)
      return NextResponse.json({ error: 'Failed to create order items' }, { status: 500 })
    }

    // Stripe line items
    const lineItems = [
      ...items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.image_url
              ? [item.image_url.startsWith('http')
                ? item.image_url
                : `${process.env.NEXT_PUBLIC_APP_URL}${item.image_url}`]
              : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Tax' },
          unit_amount: Math.round(totals.tax * 100),
        },
        quantity: 1,
      },
    ]

    if (customerInfo.orderType === 'delivery') {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: { name: 'Delivery Fee' },
          unit_amount: 399, // $3.99
        },
        quantity: 1,
      })
    }

    // Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
      metadata: {
        order_id: order.id,
        order_number: order.order_number,
        customer_phone: customerInfo.customerPhone,
      },
      customer_email: customerInfo.customerEmail,
      phone_number_collection: { enabled: true },
    })

    // Update order with Stripe session ID
    await supabase.from('orders').update({ stripe_session_id: session.id }).eq('id', order.id)

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
