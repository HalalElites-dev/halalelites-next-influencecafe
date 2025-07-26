import React from 'react'
import { Button } from '@/components/ui/button'


const Hero = () => {
    return (
        <section id="home" className='relative flex items-center justify-between overflow-hidden min-h-screen'>
            {/* background image */}
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url("/hero.png")]' ><div className="absolute inset-0 bg-black/40">
            </div>
            </div>


            <div className="relative max-w-8xl mx-auto text-center mb-16">
                <h1 className="text-6xl md:text-7xl lg:text-7xl text-brand-primary font-bold font-heading">
                    Experience The Authentic Flavors
                    <br />
                    <span className=''>Of Hadramout</span>
                </h1>
                <Button size={'lg'} className='mx-auto mt-4 text-lg font-body font-bold '> 
                    Order Now
                </Button>
            </div>


        </section>
    )
}

export default Hero