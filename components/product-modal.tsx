"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface NutritionFacts {
  calories: number
  sugar: string
  protein: string
  fat: string
}

interface MenuItem {
  name: string
  description: string
  price: string
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
  const [isLearnMoreExpanded, setIsLearnMoreExpanded] = useState(false)

  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-800">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="w-full h-80 rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={item.image || "/placeholder.svg?height=320&width=400&query=delicious cafe food"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                <div className="text-4xl font-bold text-brand-primary mt-4">{item.price}</div>
              </div>

              {item.scienceHighlight && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-primary mb-2">Science-Backed Highlight</h4>
                  <p className="text-muted-foreground text-sm">{item.scienceHighlight}</p>
                </div>
              )}

              <Button asChild size="lg" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                <Link href={'/pharmacology'}>
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          <Separator />

          {item.nutritionFacts && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition | Wellness Facts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted border border-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{item.nutritionFacts.calories}</div>
                  <div className="text-sm text-muted-foreground">Calories</div>
                </div>
                <div className="bg-muted border border-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{item.nutritionFacts.sugar}</div>
                  <div className="text-sm text-muted-foreground">Sugar</div>
                </div>
                <div className="bg-muted border border-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{item.nutritionFacts.protein}</div>
                  <div className="text-sm text-muted-foreground">Protein</div>
                </div>
                <div className="bg-muted border border-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{item.nutritionFacts.fat}</div>
                  <div className="text-sm text-muted-foreground">Fat</div>
                </div>
              </div>
            </div>
          )}

          {item.mechanismOfAction && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.mechanismOfAction.title}</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">{item.mechanismOfAction.description}</p>

                {/* Glossary Terms */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Terms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.mechanismOfAction.glossaryTerms.map((term, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-blue-100 transition-colors"
                        title={term.definition}
                      >
                        {term.term}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 italic">Hover over terms to see definitions</p>
                </div>
              </div>
            </div>
          )}

          {item.learnMore && (
            <div>
              <Button
                variant="outline"
                onClick={() => setIsLearnMoreExpanded(!isLearnMoreExpanded)}
                className="w-full justify-between text-brand-primary"
              >
                Learn the Science
                {isLearnMoreExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>

              {isLearnMoreExpanded && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">{item.learnMore.title}</h4>
                  <p className="text-blue-700 text-sm mb-3">{item.learnMore.source}</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-blue-600 hover:text-blue-800"
                    onClick={() => window.open(item.learnMore?.url, "_blank")}
                  >
                    Read Study <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
