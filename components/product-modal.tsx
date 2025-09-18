"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"

interface MenuItem {
  name: string
  description: string
  price: string
  image?: string
}

interface ProductModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ item, isOpen, onClose }: ProductModalProps) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={item.image || "/placeholder.svg?height=256&width=400&query=delicious food"}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-3xl font-bold text-gray-800">{item.price}</div>
               <Button
                            size="lg"
                            className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                        >
                            <Link href="/pharmacology" className="flex items-center gap-2">
                                Learn More
                            </Link>
                        </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
