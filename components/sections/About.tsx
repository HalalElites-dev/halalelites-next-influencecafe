"use client"
import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Coffee, Dessert, CupSoda, Truck } from "lucide-react"
import Link from "next/link"

const About = () => {
  return (
    <section className="relative py-20 px-6 bg-background">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Custom Image Group */}
        <div className="relative w-full max-w-[650px] aspect-square mx-auto">
          {/* Picture 1 */}
          <div className="absolute top-0 left-0 w-[55%] h-[55%] sm:w-[360px] sm:h-[375px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/coffeee.webp"
              alt="Breakfast"
              fill
              sizes="(max-width: 768px) 70vw, 360px"
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Picture 2 */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[55%] sm:w-[388px] sm:h-[388px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about2.webp"
              alt="About"
              fill
              sizes="(max-width: 768px) 70vw, 388px"
              className="object-cover"
            />
          </div>

          {/* Croissant graphic */}
          <div className="absolute top-5 md:top-15 right-5 xl:top-5 xl:-right-3 w-34 h-34 md:h-50 md:w-70  z-40 ">
            <Image
              src="/croissant.webp"
              alt="food item"
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          {/* Seal graphic */}
          <div className="absolute bottom-4 left-4  md:left-1 xl:-left-10 w-34 h-34 md:h-50 md:w-70  z-40">
            <Image
              src="/logo.webp"
              alt="logo"
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>


        {/* Right: Info */}
        <div className="">
          <span className="uppercase tracking-wide text-sm text-brand-primary font-medium">
            About Us
          </span>
          <h2 className="text-5xl font-bold font-body mb-4 text-primary">
            Toledo’s First Specialty Coffee and Educational Hub
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            At Influence Café, we’re more than just a coffee shop—we’re a community space
            where science, flavor, culture, and wellness meet. From carefully roasted beans to
            modern desserts, every detail is crafted to inspire connection and creativity.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-[62px] flex-shrink-0">
                <Truck className="text-primary" size={62} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-body">Ethically Sourced Coffee</h3>
                <p className="text-muted-foreground">
                  Our beans are roasted locally and sourced with care for quality and sustainability.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[62px] flex-shrink-0">
                <Dessert className="text-primary" size={62} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-body">Modern Desserts</h3>
                <p className="text-muted-foreground">
                  A selection of sweet treats and healthy snacks designed to pair perfectly with your coffee. || To be Updated
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[62px] flex-shrink-0">
                <Coffee className="text-primary" size={62} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-body">Workshops & Events</h3>
                <p className="text-muted-foreground">
                  From wellness talks to coffee science sessions, we host experiences that spark curiosity.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-[62px] flex-shrink-0">
                <CupSoda className="text-primary" size={62} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground font-body">A Place for Community</h3>
                <p className="text-muted-foreground">
                  Whether you’re studying, collaborating, or relaxing, our café is built for connection.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              <Link href="/contact" className="flex items-center gap-2">
                View Our Location
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
