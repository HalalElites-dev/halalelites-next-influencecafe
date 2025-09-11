"use client"
import { Coffee, Sandwich, Dessert, CupSoda } from "lucide-react"

export const Specials = () => {
  return (
    <section className=" py-24 px-6 bg-white">

      
      <div className="max-w-7xl mx-auto text-center">
        {/* Topper + Title */}
        <span className="uppercase tracking-wide text-sm text-primary font-medium">
          Our Specials
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground font-body">
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
          <div className="bg-card shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Coffee className="w-16 h-16 text-muted-foreground" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Coffee</h3>
            <p className="text-muted-foreground">
              Specialty coffee roasted locally with bold, aromatic flavors.
            </p>
          </div>

          {/* Tea */}
          <div className="bg-card shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <CupSoda className="w-16 h-16 text-muted-foreground" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Tea</h3>
            <p className="text-muted-foreground">
              Freshly brewed with high-quality leaves for a soothing experience.
            </p>
          </div>

          {/* Sandwiches */}
          <div className="bg-card shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Sandwich className="w-16 h-16 text-muted-foreground" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Sandwiches</h3>
            <p className="text-muted-foreground">
              Crafted with house-baked bread and farm-fresh ingredients.
            </p>
          </div>

          {/* Pastries */}
          <div className="bg-card shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Dessert className="w-16 h-16 text-muted-foreground" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Pastries</h3>
            <p className="text-muted-foreground">
              Baked fresh daily, pairing perfectly with your morning brew.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a href="/menu">
            <button className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-primary/90 transition">
              Explore Our Menu
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Specials