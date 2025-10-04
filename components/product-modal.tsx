"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
// import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
// import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface NutritionFacts {
  calories: number
  sugar: string
  protein: string
  fat: string
}

interface MenuItem {
  name: string
  description: string
  price: string | { [key: string]: string } // ✅ new
  image?: string
  nutritionFacts?: NutritionFacts
  scienceHighlight?: string
  mechanismOfAction?: {
    title: string
    description: string
    glossaryTerms: Array<{
      term: string
      definition: string
    }>
  }
  learnMore?: {
    title: string
    source: string
    url: string
  }
}


interface ProductModalProps {
  item: MenuItem | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ item, isOpen, onClose }: ProductModalProps) {
  // const [isLearnMoreExpanded, setIsLearnMoreExpanded] = useState(false)

  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95%] max-h-[85vh] overflow-y-auto p-0">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b px-4 py-3 z-10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">{item.name}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-4 pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left side - Product Image */}
            <div className="space-y-3">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.image || "/scene.webp"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  width={1080}
                  height={1020}
                  quality={40}
                />
              </div>

              {item.nutritionFacts && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700">{item.nutritionFacts.calories}</div>
                      <div className="text-xs text-gray-500">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700">{item.nutritionFacts.sugar}</div>
                      <div className="text-xs text-gray-500">Sugar</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700">{item.nutritionFacts.protein}</div>
                      <div className="text-xs text-gray-500">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-700">{item.nutritionFacts.fat}</div>
                      <div className="text-xs text-gray-500">Fat</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side - Product Details */}
            <div className="space-y-4 h-full flex flex-col">
              <div>
                <div className="text-xl font-bold text-brand-primary mb-2">
                  {typeof item.price === "string"
                    ? item.price
                    : Object.entries(item.price)
                      .map(([size, value]) => `${size.charAt(0).toUpperCase() + size.slice(1)}: ${value}`)
                      .join(" | ")}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {item.scienceHighlight && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-brand-primary mb-1 text-sm">Science-Backed</h4>
                  <p className="text-gray-600 text-xs">{item.scienceHighlight}</p>
                </div>
              )}

              {item.mechanismOfAction && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">{item.mechanismOfAction.title}</h4>
                  <p className="text-gray-700 text-xs leading-relaxed mb-3">{item.mechanismOfAction.description}</p>

                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-xs">Key Terms:</h5>
                    <div className="flex flex-wrap gap-1">
                      {item.mechanismOfAction.glossaryTerms.map((term, index) => (
                        <a href={`/pharmacology#${term.term}`} key={index}>
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-blue-100 transition-colors text-xs py-0.5 px-2"
                            title={term.definition}
                          >
                            {term.term}
                          </Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex-1" /> {/* Spacer to push button to bottom */}

              {item.learnMore?.url && (
                <Button asChild className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-2 mt-2">
                  <Link href={item.learnMore.url} target="_blank" rel="noopener noreferrer">
                    Read Studies
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
