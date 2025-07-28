import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section id="home" className='relative flex items-center justify-between overflow-hidden min-h-screen'>
            {/* background image */}
            <div className='absolute inset-0 -0 bg-gradient-to-b from-brand-primary/20 via-brand-accen/10 to-brand-secondary/30'></div>

            <div className='relative z-10 container mx-auto px-4 '>
                <div className='grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20'>
                    {/* left side */}
                    <div className='text-left'>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-restaurant-plum mb-6 leading-tight">
                            The Flavor of New York,
                            <br />
                            <span className="text-restaurant-orange">Now in Columbus</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            Experience authentic halal cuisine with the bold flavors of New York street food, crafted with love and
                            tradition in the heart of Columbus, Ohio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button
                                size="lg"
                                className="bg-restaurant-orange  text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                View Menu
                            </Button>
                            <Button
                                size="lg"
                                className=" text-brand-secondary border-2 border-restaurant-plum  px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-brand-secondary hover:text-white"
                            >
                                Order Now
                            </Button>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative">
                            {/* Main circular food image */}
                            <div className="w-80 h-80 lg:w-full lg:h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/herochicken.png"
                                    alt="Signature Dish"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative circular border */}
                            <div className="absolute -inset-4 border-4 border-dashed border-restaurant-yellow rounded-full animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - positioned absolutely at bottom center */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-restaurant-orange rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-restaurant-orange rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero