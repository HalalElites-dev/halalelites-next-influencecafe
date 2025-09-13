'use client';

import React, { useEffect, useState } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
// import { Star } from 'lucide-react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';


const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
            What Our Happy Customers Say About <br />
            Their Experience 
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Left image */}
          <div className="w-full">
            <Image
              src="/scene.webp" // replace with your image
              alt="Coffee"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* Testimonial card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#f8f5ef] rounded-2xl shadow-lg p-8 lg:p-12 -mt-12 lg:-ml-16"
              >
                {/* Quote icon */}
                <div className="absolute -top-6 right-6 bg-brand-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  “
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-foreground mb-4">
                  {TESTIMONIALS[current].quote}
                </h3>
                <p className="text-gray-600 mb-6">
                  Sed lectus ultricies id id massa tellus. Gravida ullamcorper
                  lectus vitae tristique cursus tempor rutrum. Aenean posuere
                  urna feugiat nunc in nulla.
                </p>

                <hr className="border-t border-gray-300 my-4" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    {TESTIMONIALS[current].author}
                  </span>
                  {/* <div className="flex items-center space-x-1">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials