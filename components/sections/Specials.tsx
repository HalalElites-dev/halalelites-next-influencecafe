"use client"
import { Coffee, Sandwich, Dessert, CupSoda } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export const Specials = () => {
  return (
    <section className=" py-24 px-6 bg-white">


      <div className="max-w-7xl mx-auto text-center">
        {/* Topper + Title */}
        <span className="uppercase tracking-wide text-sm text-primary font-medium">
          Our Specials
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-foreground font-body">
          Coffee, Tea, Pastries & More
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-12">
          At Influence Café, every item is crafted with care. From rich, aromatic
          coffees to refreshing teas, fresh sandwiches, and decadent pastries—
          we’re here to fuel your day with flavor and wellness.
        </p>

        {/* Specials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Coffee */}
          <div className="flex items-start gap-4 p-6 border rounded-2xl transition hover:shadow-lg">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted">
              <Coffee className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg md:text-3xl font-bold text-foreground font-body text-left">Coffee</h3>
              <p className="text-muted-foreground text-sm md:text-lg text-left">
                Specialty coffee roasted locally with bold, aromatic flavors.
              </p>
            </div>
          </div>

          {/* Tea */}
          <div className="flex items-start gap-4 p-6 border rounded-2xl transition hover:shadow-lg">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted">
              <CupSoda className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg md:text-3xl font-bold text-foreground font-body text-left">Tea</h3>
              <p className="text-muted-foreground text-sm md:text-lg text-left">
                Freshly brewed with high-quality leaves for a soothing experience.
              </p>
            </div>
          </div>

          {/* Sandwiches */}
          <div className="flex items-start gap-4 p-6 border rounded-2xl transition hover:shadow-lg">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted">
              <Sandwich className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg md:text-3xl font-bold text-foreground font-body text-left">Sandwiches</h3>
              <p className="text-muted-foreground text-sm md:text-lg text-left">
                Crafted with house-baked bread and farm-fresh ingredients.
              </p>
            </div>
          </div>

          {/* Pastries */}
          <div className="flex items-start gap-4 p-6 border rounded-2xl transition hover:shadow-lg">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted">
              <Dessert className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg md:text-3xl font-bold text-foreground font-body text-left">Pastries</h3>
              <p className="text-muted-foreground text-sm md:text-lg text-left">
                Baked fresh daily, pairing perfectly with your morning brew.
              </p>
            </div>
          </div>
        </div>


        {/* CTA */}
        <div className="mt-12">
         
            <Button className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-primary/90 transition">
              <Link href="/menu">
                Explore Our Menu
              </Link>
            </Button>
          
        </div>
      </div>
    </section>
  )
}

export default Specials