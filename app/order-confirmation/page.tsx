// app/order-confirmation/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/stores/cartStore'

export default function OrderConfirmationPage() {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')
    const [loading, setLoading] = useState(true)
    const [session, setSession] = useState<any>(null)
    const router = useRouter()
    const clearCart = useCartStore((state) => state.clearCart)  // ✅ get clearCart


    useEffect(() => {
    if (!sessionId) return
    const fetchSession = async () => {
      try {
        const res = await fetch(`/api/checkout/session?session_id=${sessionId}`)
        const data = await res.json()
        if (res.ok) {
          setSession(data)
          clearCart()  // ✅ empty cart once we have a successful session
        }
      } catch (err) {
        console.error('Error fetching session:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchSession()
  }, [sessionId, clearCart])

    if (loading) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-2xl font-bold">Loading your order...</h1>
            </div>
        )
    }

    if (!session) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h1 className="text-2xl font-bold text-red-500">Order not found</h1>
                <Button className="mt-4" onClick={() => router.push('/')}>
                    Back to Home
                </Button>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
            <p className="text-lg mb-6">
                We’ve received your payment. A confirmation has been sent to{' '}
                <span className="font-semibold">{session.customer_email}</span>.
            </p>

            <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold mb-2">Order Details</h2>
                <p><span className="font-semibold">Order ID:</span> {session.id}</p>
                <p><span className="font-semibold">Amount Paid:</span> ${(session.amount_total / 100).toFixed(2)}</p>
                <p><span className="font-semibold">Status:</span> {session.payment_status}</p>
            </div>

            <Button size="lg" onClick={() => router.push('/menu')}>
                Back to Menu
            </Button>
        </div>
    )
}
