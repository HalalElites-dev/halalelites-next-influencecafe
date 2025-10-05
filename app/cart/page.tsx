// app/cart/page.tsx
 'use client'
 import { useCartStore } from '@/lib/stores/cartStore'
 import { Button } from '@/components/ui/button'
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
 import { Minus, Plus, Trash2 } from 'lucide-react'
 import Link from 'next/link'
 import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const router = useRouter()
  if (items.length === 0) {
    return (
<div className="container mx-auto px-4 py-16 text-center h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some delicious items from our menu!</p>
        <Link href="/menu">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8 h-screen justify-center mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Button 
          variant="outline" 
          onClick={clearCart}
          className="text-red-600 hover:text-red-700"
        >
          Clear Cart
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Image 
                    src={item.image_url} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                    width={60}
                    height={60}
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Subtotal and Remove */}
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              
              <hr />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${(getTotalPrice() * 1.1).toFixed(2)}</span>
              </div>
              
              <Button 
                onClick={() => router.push('/checkout')}
                className="w-full"
                size="lg"
              >
                Proceed to Checkout
              </Button>
              
              <Link href="/menu">
                <Button variant="default" className="w-full bg-gray-50 text-black hover:bg-gray-50">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
 }