"use client";

import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

export const Specials = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const specialItems = [
    {
      id: "espresso",
      title: "Signature Espresso Drinks",
      description: "Rich, bold espresso crafted with premium beans and artisanal techniques for the perfect shot.",
      image: "/elegant-espresso-drink-with-latte-art-in-glass-cup.jpg",
    },
    {
      id: "tea",
      title: "Specialty Teas",
      description: "Carefully curated loose-leaf teas from around the world, brewed to perfection.",
      image: "/beautiful-specialty-tea-in-elegant-glass-teacup-wi.jpg",
    },
    {
      id: "coffee",
      title: "Brewed Coffee",
      description: "Freshly roasted single-origin beans brewed using various methods for unique flavor profiles.",
      image: "/pour-over-coffee-in-glass-dripper-with-coffee-bean.jpg",
    },
    {
      id: "desserts",
      title: "Modern Desserts",
      description: "Contemporary pastries and desserts crafted with innovative techniques and premium ingredients.",
      image: "/modern-layered-dessert-in-glass-with-artistic-pres.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-wide text-sm text-primary font-medium">Our Specials</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-foreground font-body">
            Satisfying Cravings, One Friendly
            <br />
            Brew at a Time 
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Most drinks and desserts are available with either low or zero-sugar alternatives, making Influence Cafe
            inclusive and health-friendly.
          </p>
        </div>

        {/* Interactive Specials List */}
        <div className="max-w-7xl mx-auto">
          <div className="border border-border rounded-3xl overflow-hidden bg-card">
            {specialItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center justify-between p-8 transition-all duration-300 cursor-pointer group ${
                  index !== specialItems.length - 1 ? "border-b border-border" : ""
                } ${hoveredItem === item.id ? "bg-muted/30" : "hover:bg-muted/20"}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Content */}
                <div className="flex-1 pr-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">{item.description}</p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 mr-8">
                  <div className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Image */}
                <div
                  className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hoveredItem === item.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="w-40 h-48 rounded-2xl overflow-hidden shadow-2xl bg-white border border-border">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={160}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-8 py-4 rounded-xl shadow-md hover:bg-primary/90 transition text-lg">
            <Link href="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Specials
