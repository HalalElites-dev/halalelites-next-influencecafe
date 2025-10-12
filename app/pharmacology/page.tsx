"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { pharmacologyData } from "@/lib/pharmacology"
import { cn } from "@/lib/utils"

const PharmacologyPage = () => {
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  useEffect(() => {
    // Check for hash in URL and highlight the corresponding term
    const hash = window.location.hash.slice(1) // Remove the # symbol
    if (hash) {
      setHighlightedId(hash)

      // Scroll to the element
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 100)
      }

      // Remove highlight after 2 seconds
      setTimeout(() => {
        setHighlightedId(null)
      }, 2000)
    }
  }, [])

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url(/bannerz.webp)" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center xl:items-start justify-center h-full text-white px-5 xl:px-26 text-center xl:text-left pt-30 lg:pt-20">
          <h1 className="text-5xl font-bold mb-4 font-body">Pharmacology</h1>
          <div className="flex items-center text-sm text-white justify-center xl:justify-start">
            <span>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">Pharmacology</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-wide mb-2">
            The Science Behind Our Ingredients
          </p>
          <h2 className="text-5xl font-bold mb-6 text-brand-primary font-body">
            Here&apos;s what science says — simply explained and backed by real research
          </h2>
          <p className="text-gray-700 mb-4">
            Every drink and dessert at Influence Café is inspired by how food and natural compounds affect the body
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-4">
              <Card className="p-4">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Navigation</h3>
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <nav className="space-y-4">
                    {pharmacologyData.map((category) => (
                      <div key={category.id}>
                        <a
                          href={`#${category.id}`}
                          className="text-sm font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wide block mb-2"
                        >
                          {category.emoji} {category.title}
                        </a>
                        <div className="space-y-1 ml-4">
                          {category.terms.map((term) => (
                            <a
                              key={term.id}
                              href={`#${term.id}`}
                              className="text-sm text-gray-600 hover:text-gray-900 block py-1 hover:underline"
                            >
                              {term.term}
                            </a>
                          ))}
                        </div>
                        <Separator className="mt-3" />
                      </div>
                    ))}
                  </nav>
                </ScrollArea>
              </Card>
            </div>
          </aside>

          {/* Right Content - Glossary Terms */}
          <main className="space-y-12">
            {pharmacologyData.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-4">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  {category.emoji} {category.title}
                </h2>

                <div className="space-y-6">
                  {category.terms.map((term) => (
                    <Card
                      key={term.id}
                      id={term.id}
                      className={cn(
                        "p-6 border-l-4 border-l-brand-secondary transition-all duration-500 scroll-mt-4",
                        highlightedId === term.id && "bg-yellow-50/70",
                      )}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{term.term}</h3>
                      <p className="text-lg text-gray-600 italic mb-3">{term.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-3">{term.definition}</p>
                      <p className="text-sm text-gray-500 italic">{term.reference}</p>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </section>
  )
}

export default PharmacologyPage
