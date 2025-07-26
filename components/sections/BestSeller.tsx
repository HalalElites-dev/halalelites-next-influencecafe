import {BESTSELLING } from '@/lib/constants'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const BestSelling = () => {
  return (
    <section id="menu" className='py-30 px-6 bg-background'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
                <h1 className='text-5xl md:text-6xl  text-foreground mb-4 leading-tight tracking-tight font-heading uppercase'>Popular <span className="text-brand-primary font-heading ">Choices</span></h1>
                
                {/* Best selling items - exact design match */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-10'>
                    {BESTSELLING.map((bestseller, index) => (
                        <div key={index} className='flex items-center gap-6'>
                            {/* Circular Image */}
                            <div className='relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0'>
                                <div className='w-full h-full rounded-full overflow-hidden bg-brand-secondary'>
                                    <Image 
                                        src={bestseller.Image} 
                                        alt={bestseller.title} 
                                        fill 
                                        className="object-cover invert" 
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className='flex-1'>
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2 text-left uppercase tracking-wide">
                                    {bestseller.title}
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-left mb-4">
                                    {bestseller.description}
                                </p>
                                
                                {/* Price section */}
                                <div className='flex items-baseline gap-2'>
                                    <span className='text-sm text-muted-foreground'>Start from</span>
                                    <span className='text-3xl font-bold text-brand-primary font-body'>
                                        $49.99
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center'>
                   <Button  className="bg-brand-primary px-10 py-6  text-lg font-medium tracking-wide font-heading">
                        <Link className='lg:text-xl font-heading font-semibold' href={"/"}>View Full Menu</Link>
                    </Button>
            </div>
        </div>
    </section>

)
}

export default BestSelling