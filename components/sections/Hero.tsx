import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="home" className='bg-background'>
            {/* hero section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-20 mx-auto max-w-7xl xl:max-w-[1800px] py-32 md:py-30 xl:py-38'>
                {/* left section */}
                  <div className='text-center lg:text-left'>
                        <h1 className=" text-4xl md:text-5xl lg:text-7xl font-bold font-body mb-6 leading-tight">
                            Coffee. Wellness. Influence.
                            
                        </h1>
                        <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:max-w-2xl leading-relaxed">
                            A specialty café in Toledo where every sip and bite comes with knowledge, health, and flavor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform "
                            >
                                <Link href="/contact">
                                    Visit Us
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant={'link'}
                                className=" text-black px-8 py-4 text-lg font-semibold  "
                            >
                                <Link href="/menu">
                                    Explore Our Menu
                                </Link>
                            </Button>
                        </div>
                    </div>
                    {/* right section */}
                    <div className=''>
                        <Image
                            src="/text.png"
                            alt="hero image"
                            width={600}
                            height={400}
                            className="xl:ml-20 mx-auto"
                        />
                    </div>
            </div>
            
        </section>
    )
}

export default Hero