"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { useCartStore } from "@/lib/stores/cartStore"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  calories?: number
  sugar?: string
  protein?: string
  fat?: string
  science_highlight?: string
  mechanism_description?: string
  learn_more_url?: string
}

interface GlossaryTerm {
  term: string
  definition: string
}

interface ProductModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ item, isOpen, onClose }: ProductModalProps) {
  const [glossaryTerms, setGlossaryTerms] = useState<GlossaryTerm[]>([])
  
  // Add cart store hooks
  const { items, addItem, updateQuantity } = useCartStore()

  useEffect(() => {
    if (!item) return
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    )

    async function fetchGlossary() {
      const { data, error } = await supabase
        .from("item_glossary_junction")
        .select(`
          glossary_terms (
            term,
            definition
          )
        `)
        .eq("item_id", item?.id)

      if (error) {
        console.error("Glossary fetch error:", error)
        setGlossaryTerms([])
      } else {
        setGlossaryTerms((data || []).map((row: any) => row.glossary_terms))
      }
    }

    fetchGlossary()
  }, [item])

  if (!item) return null

  // Get current quantity in cart
  const getItemQuantity = (itemId: string) => {
    const cartItem = items.find(i => i.id === itemId)
    return cartItem?.quantity || 0
  }

  // Add item to cart
  const handleAddToCart = (menuItem: MenuItem) => {
    addItem({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      image_url: menuItem.image_url || "/scene.webp"
    })
  }

  // Update quantity
  const handleUpdateQuantity = (itemId: string, change: number) => {
    const currentQuantity = getItemQuantity(itemId)
    const newQuantity = currentQuantity + change
    updateQuantity(itemId, newQuantity)
  }

  const quantity = getItemQuantity(item.id)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95%] max-h-[85vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b px-4 py-3 z-10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">{item.name}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-4 pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left side - Image + Nutrition */}
            <div className="space-y-3">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.image_url || "/scene.webp"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  width={1080}
                  height={1020}
                  quality={40}
                />
              </div>

              {(item.calories || item.sugar || item.protein || item.fat) && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {item.calories !== undefined && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-700">{item.calories}</div>
                        <div className="text-xs text-gray-500">Calories</div>
                      </div>
                    )}
                    {item.sugar && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-700">{item.sugar}</div>
                        <div className="text-xs text-gray-500">Sugar</div>
                      </div>
                    )}
                    {item.protein && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-700">{item.protein}</div>
                        <div className="text-xs text-gray-500">Protein</div>
                      </div>
                    )}
                    {item.fat && (
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-700">{item.fat}</div>
                        <div className="text-xs text-gray-500">Fat</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right side - Details */}
            <div className="space-y-4 h-full flex flex-col">
              <div>
                <div className="text-2xl font-bold text-brand-primary mb-2">
                  ${item.price.toFixed(2)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {item.science_highlight && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-brand-primary mb-1 text-sm">Science-Backed</h4>
                  <p className="text-gray-600 text-xs">{item.science_highlight}</p>
                </div>
              )}

              {item.mechanism_description && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">How it Works</h4>
                  <p className="text-gray-700 text-xs leading-relaxed mb-3">
                    {item.mechanism_description}
                  </p>
                </div>
              )}

              {glossaryTerms.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h5 className="font-medium text-gray-800 text-xs mb-2">Key Terms:</h5>
                  <div className="flex flex-wrap gap-1">
                    {glossaryTerms.map((t, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="cursor-pointer hover:bg-blue-100 transition-colors text-xs py-0.5 px-2"
                        title={t.definition}
                      >
                        {t.term}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex-1" />

              {item.learn_more_url && (
                <Button
                  asChild
                  variant="default"
                  className="w-full py-2 bg-white text-black hover:bg-white"
                >
                  <Link href={item.learn_more_url} target="_blank" rel="noopener noreferrer">
                    Read Studies
                  </Link>
                </Button>
              )}

              {/* Cart Controls */}
              <div>
                {quantity > 0 ? (
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <Button
                        variant="default"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Badge variant="default" className="text-base px-4 py-2">
                        {quantity}
                      </Badge>
                      <Button
                        variant="default"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      className="flex-1 bg-brand-primary hover:bg-brand-primary/90"
                      asChild
                    >
                      <Link href="/cart">View Cart</Link>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}