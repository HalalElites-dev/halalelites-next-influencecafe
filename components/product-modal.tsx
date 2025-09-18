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
      <DialogContent className="md:max-w-[95vw] w-[90%] md:max-h-[95vh] h-[80%] lg:max-w-[90vw] lg:h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b px-6 lg:px-12 py-6 z-10">
          <DialogHeader>
            <DialogTitle className="text-3xl lg:text-4xl font-bold text-gray-800">{item.name}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-6 lg:px-12 pb-12">
          <div className="space-y-12">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Product Image - takes up more space */}
              <div className="lg:col-span-3">
                <div className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <img
                    src={item.image || "/placeholder.svg?height=500&width=800&query=delicious cafe food"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details - better organized */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="text-gray-600 leading-relaxed text-lg lg:text-xl">{item.description}</p>
                  <div className="text-4xl lg:text-5xl font-bold text-brand-primary mt-6">{item.price}</div>
                </div>

                {item.scienceHighlight && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-brand-primary mb-3 text-lg">Science-Backed Highlight</h4>
                    <p className="text-muted-foreground">{item.scienceHighlight}</p>
                  </div>
                )}

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white text-lg py-6"
                >
                  <Link href={"/pharmacology"}>Learn More</Link>
                </Button>
              </div>
            </div>

            <Separator className="my-12" />

            {item.nutritionFacts && (
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">Nutrition | Wellness Facts</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-muted border border-muted rounded-lg p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                      {item.nutritionFacts.calories}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground mt-2">Calories</div>
                  </div>
                  <div className="bg-muted border border-muted rounded-lg p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                      {item.nutritionFacts.sugar}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground mt-2">Sugar</div>
                  </div>
                  <div className="bg-muted border border-muted rounded-lg p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                      {item.nutritionFacts.protein}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground mt-2">Protein</div>
                  </div>
                  <div className="bg-muted border border-muted rounded-lg p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-muted-foreground">
                      {item.nutritionFacts.fat}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground mt-2">Fat</div>
                  </div>
                </div>
              </div>
            )}

            {item.mechanismOfAction && (
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">{item.mechanismOfAction.title}</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">{item.mechanismOfAction.description}</p>

                  {/* Glossary Terms */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 text-lg">Key Terms:</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.mechanismOfAction.glossaryTerms.map((term, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer hover:bg-blue-100 transition-colors text-sm py-2 px-4"
                          title={term.definition}
                        >
                          {term.term}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 italic">Hover over terms to see definitions</p>
                  </div>
                </div>
              </div>
            )}

            {item.learnMore && (
              <div>
                <Button
                  variant="outline"
                  onClick={() => setIsLearnMoreExpanded(!isLearnMoreExpanded)}
                  className="w-full justify-between text-brand-primary text-lg py-6"
                >
                  Learn the Science
                  {isLearnMoreExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>

                {isLearnMoreExpanded && (
                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-8">
                    <h4 className="font-semibold text-blue-800 mb-4 text-lg">{item.learnMore.title}</h4>
                    <p className="text-blue-700 mb-4">{item.learnMore.source}</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-800 text-base"
                      onClick={() => window.open(item.learnMore?.url, "_blank")}
                    >
                      Read Study <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
