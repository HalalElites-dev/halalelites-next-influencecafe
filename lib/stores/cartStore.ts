// stores/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface CartItem {
    id: string
    name: string
    price: number
    image_url: string
    quantity: number
}
interface CartStore {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'quantity'>) => void
    updateQuantity: (id: string, quantity: number) => void
    removeItem: (id: string) => void
    clearCart: () => void
    getTotalPrice: () => number
    getTotalItems: () => number
}
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (newItem) => {
                set((state) => {
                    const existingItem = state.items.find(item => item.id === newItem.id)

                    if (existingItem) {
                        return {
                            items: state.items.map(item =>
                                item.id === newItem.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            )
                        }
                    } else {
                        return {
                            items: [...state.items, { ...newItem, quantity: 1 }]
                        }
                    }
                })
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id)
                    return
                }

                set((state) => ({
                    items: state.items.map(item =>
                        item.id === id ? { ...item, quantity } : item
                    )
                }))
            },

            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter(item => item.id !== id)
                }))
            },

            clearCart: () => set({ items: [] }),

            getTotalPrice: () => {
                const { items } = get()
                return items.reduce((total, item) => total + (item.price * item.quantity), 0)
            },
            getTotalItems: () => {
                const { items } = get()
                return items.reduce((total, item) => total + item.quantity, 0)
            }
        }),
        {
            name: 'restaurant-cart', // localStorage key
            skipHydration: true, // Prevent SSR hydration issues
        }
    )
)