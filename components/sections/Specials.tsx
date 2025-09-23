"use client";

import { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { specialItems } from "@/lib/constants";
export const Specials = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)


  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="uppercase tracking-wide text-xs md:text-sm text-primary font-medium">Our Specials</span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2 mb-4 text-foreground font-body leading-tight">
            Satisfying Cravings, One Friendly
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Brew at a Time 
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground px-4 md:px-0">
            Most drinks and desserts are available with either low or zero-sugar alternatives, making Influence Cafe
            inclusive and health-friendly.
          </p>
        </div>

        {/* Interactive Specials List */}
        <div className="max-w-7xl mx-auto">
          <div className="border border-border rounded-2xl md:rounded-3xl overflow-hidden bg-card">
            {specialItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-300 cursor-pointer group ${
                  index !== specialItems.length - 1 ? "border-b border-border" : ""
                } ${hoveredItem === item.id ? "bg-muted/30" : "hover:bg-muted/20"}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Mobile Layout */}
                <div className="md:hidden p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1 pr-4">
                      {item.title}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Image */}
                  <div className="mb-4">
                    <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg bg-white border border-border">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={320}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between p-6 lg:p-8">
                  {/* Content */}
                  <div className="flex-1 pr-6 lg:pr-8">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">{item.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 mr-6 lg:mr-8">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg
                        className="w-4 lg:w-5 h-4 lg:h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Desktop Hover Image */}
                  <div
                    className={`absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                      hoveredItem === item.id
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="w-32 lg:w-40 h-40 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-white border border-border">
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
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <Button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-md hover:bg-primary/90 transition text-base md:text-lg w-full sm:w-auto">
            <Link href="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Specials