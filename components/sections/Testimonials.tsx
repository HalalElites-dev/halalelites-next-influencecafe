'use client';

import React, { useEffect, useState } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import { Star } from 'lucide-react'

const Testimonials = () => {


    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])


    return (
        <section id='testimonials' className='py-24 px-6 '>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>

                    <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
                        Testimonials
                    </div>

                    <h2 className='text-5xl md:text-6xl uppercase text-foreground mb-8 leading-tight tracking-tight'>
                        What Our <span className='text-brand-primary'>Customers Say</span>
                    </h2>

                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                {[...Array(TESTIMONIALS[currentTestimonial])].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-restaurant-yellow text-restaurant-yellow" />
                                ))}
                            </div>

                            <blockquote className="text-lg md:text-xl text-restaurant-gray mb-6 italic leading-relaxed">
                                &quot;{TESTIMONIALS[currentTestimonial].quote}&quot;
                            </blockquote>

                            <cite className="font-semibold text-restaurant-plum text-lg">
                                — {TESTIMONIALS[currentTestimonial].author}
                            </cite>
                        </div>

                        <div className="flex justify-center mt-8 space-x-2">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-restaurant-orange" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials