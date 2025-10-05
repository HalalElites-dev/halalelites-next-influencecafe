 // components/cart/CartProvider.tsx
 'use client'
 import { useEffect } from 'react'
 import { useCartStore } from '@/lib/stores/cartStore'
 export function CartProvider({ children }: { children: React.ReactNode }) {
 useEffect(() => {
 // Hydrate the store on client side
 useCartStore.persist.rehydrate()
 }, [])
 return <>{children}</>
 }