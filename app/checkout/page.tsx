'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { parsePhoneNumber } from 'libphonenumber-js'
import { useCartStore } from '@/lib/stores/cartStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// --- Zod Schema for Form Validation ---

/**
 * Defines the validation rules for the checkout form fields.
 */
const checkoutSchema = z.object({
    customerName: z.string().min(2, 'Name must be at least 2 characters'),
    customerEmail: z.string().email('Please enter a valid email'),
    // Basic check for phone number length, full validation is done in onSubmit
    customerPhone: z.string().min(10, 'Please enter a valid phone number'),
    orderType: z.enum(['pickup', 'delivery']),
    deliveryAddress: z.string().optional(),
    specialInstructions: z.string().optional(),
}).refine((data) => {
    // Conditional validation: deliveryAddress is required if orderType is 'delivery'
    if (data.orderType === 'delivery' && !data.deliveryAddress) {
        return false
    }
    return true
}, {
    message: 'Delivery address is required for delivery orders',
    path: ['deliveryAddress'] // Associates the error with the deliveryAddress field
})

type CheckoutForm = z.infer<typeof checkoutSchema>

// --- Checkout Page Component ---

export default function CheckoutPage() {
    const { items, getTotalPrice } = useCartStore()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    // Constants for fees and tax rate
    const DELIVERY_FEE = 3.99
    const TAX_RATE = 0.1 // 10%

    // Calculations for order totals
    const subtotal = getTotalPrice()
    const tax = subtotal * TAX_RATE
    const total = subtotal + tax

    // Setup React Hook Form
    const {
        register,
        handleSubmit,
        watch,
        setValue, // Added setValue for better RadioGroup integration
        formState: { errors }
    } = useForm<CheckoutForm>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            orderType: 'pickup'
        }
    })

    // Watch for changes in the 'orderType' field to conditionally render the address
    const orderType = watch('orderType')

    // --- Form Submission Handler ---
    const onSubmit = async (data: CheckoutForm) => {
        if (items.length === 0) return

        setLoading(true)
        try {
            // 1. Phone Number Validation (using libphonenumber-js for robust check)
            // Assuming 'US' as the default region for parsing
            const phoneNumber = parsePhoneNumber(data.customerPhone, 'US')
            if (!phoneNumber?.isValid()) {
                throw new Error('Please enter a valid phone number, including area code.')
            }

            // Calculate the final total including delivery fee if applicable
            const finalTotal = orderType === 'delivery' ? total + DELIVERY_FEE : total;

            // 2. Create checkout session on the backend
            const response = await fetch('/api/checkout/create-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    customerInfo: {
                        ...data,
                        // Pass internationally formatted number to the backend
                        customerPhone: phoneNumber.formatInternational()
                    },
                    totals: {
                        subtotal,
                        tax,
                        total: finalTotal // Send the final total with fees
                    },
                }),
            })

            const session = await response.json()

            if (!response.ok) {
                throw new Error(session.error || 'Failed to create checkout session.')
            }

            // 3. Redirect to Stripe Checkout
            if (session.url) {
                window.location.href = session.url
            } else {
                throw new Error('No checkout URL received'+ session.url)
            }
        } catch (error) {
            console.error('Checkout error:', error)
            alert(error instanceof Error ? error.message : 'An unknown error occurred during checkout.')
        } finally {
            setLoading(false)
        }
    }

    // --- Empty Cart View ---
    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600 mb-8">
                    Add some delicious items to your cart before proceeding to checkout!
                </p>
                <Button onClick={() => router.push('/menu')}>
                    Browse Menu
                </Button>
            </div>
        )
    }

    // --- Main Checkout Form View ---
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-extrabold mb-10 text-gray-900 border-b pb-3">
                Secure Checkout
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* --- LEFT SIDE: Customer Info, Order Type, Instructions (2/3 width on large screens) --- */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Customer Information Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Customer Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <Label htmlFor="customerName">Full Name <span className="text-red-500">*</span></Label>
                                    <Input id="customerName" {...register('customerName')} placeholder="John Doe" />
                                    {errors.customerName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.customerName.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div>
                                    <Label htmlFor="customerEmail">Email Address <span className="text-red-500">*</span></Label>
                                    <Input id="customerEmail" type="email" {...register('customerEmail')} placeholder="john@example.com" />
                                    {errors.customerEmail && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.customerEmail.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <Label htmlFor="customerPhone">Phone Number <span className="text-red-500">*</span></Label>
                                    <Input id="customerPhone" {...register('customerPhone')} placeholder="(555) 123-4567" />
                                    {errors.customerPhone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.customerPhone.message}
                                        </p>
                                    )}
                                    <p className="text-xs text-gray-500 mt-1">
                                        We&apos;ll send order updates to this number.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Type Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Order Type</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup
                                    defaultValue="pickup"
                                    // Manually connect RadioGroup to RHF using setValue and watch 
                                    // to ensure validation and state tracking are correct
                                    onValueChange={(value: "pickup" | "delivery") => setValue('orderType', value, { shouldValidate: true })}
                                    value={orderType} // Ensure the UI reflects the RHF state
                                >
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                                            <RadioGroupItem value="pickup" id="pickup" />
                                            <Label htmlFor="pickup" className="font-medium cursor-pointer">
                                                Pickup <span className="text-sm text-gray-500">(Ready in 15-20 mins)</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 transition-colors">
                                            <RadioGroupItem value="delivery" id="delivery" />
                                            <Label htmlFor="delivery" className="font-medium cursor-pointer">
                                                Delivery <span className="text-sm text-gray-500">(+${DELIVERY_FEE.toFixed(2)} fee, 30-45 mins)</span>
                                            </Label>
                                        </div>
                                    </div>
                                </RadioGroup>

                                {/* Conditional Delivery Address Input */}
                                {orderType === 'delivery' && (
                                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <Label htmlFor="deliveryAddress" className="font-semibold">Delivery Address <span className="text-red-500">*</span></Label>
                                        <Textarea
                                            id="deliveryAddress"
                                            {...register('deliveryAddress')}
                                            placeholder="123 Main St, City, State 12345"
                                            rows={3}
                                            className="mt-2"
                                        />
                                        {errors.deliveryAddress && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.deliveryAddress.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Special Instructions Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Special Instructions (Optional)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Textarea
                                    {...register('specialInstructions')}
                                    placeholder="e.g., 'Extra napkins, please' or 'Allergies: peanuts'"
                                    rows={3}
                                />
                            </CardContent>
                        </Card>

                    </div>

                    {/* --- RIGHT SIDE: Order Summary (1/3 width on large screens) --- */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-20 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">

                                {/* Items List */}
                                <div className="space-y-3 max-h-56 overflow-y-auto pr-2 border-b pb-4">
                                    <h3 className="font-semibold text-gray-700">Items:</h3>
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between text-base">
                                            <span className="text-gray-700 font-medium">{item.quantity}x {item.name}</span>
                                            <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals Breakdown */}
                                <div className="space-y-3">
                                    <div className="flex justify-between text-base text-gray-700">
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>

                                    {orderType === 'delivery' && (
                                        <div className="flex justify-between text-base text-gray-700">
                                            <span>Delivery Fee:</span>
                                            <span>${DELIVERY_FEE.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-base text-gray-700">
                                        <span>Tax ({TAX_RATE * 100}%):</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>

                                    <hr className="my-3" />

                                    {/* Grand Total */}
                                    <div className="flex justify-between text-xl font-bold text-gray-900">
                                        <span>Total:</span>
                                        <span>
                                            ${orderType === 'delivery' ? (total + DELIVERY_FEE).toFixed(2) : total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Payment Button */}
                                <Button
                                    type="submit"
                                    className="w-full text-lg font-bold py-6 bg-brand-primary transition-colors"
                                    size="lg"
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Pay with Stripe'}
                                </Button>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    You will be redirected to Stripe for secure payment processing.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    )
}