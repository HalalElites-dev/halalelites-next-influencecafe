import React from 'react'
import { HERO_SUBTEXT, HERO_CTA_TEXT, HERO_HEADING } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"
import Image from 'next/image';
import { Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className='relative flex items-center justify-between bg-gradient-to-br from-brand-secondary to-brand-primary hero-diagonal overflow-hidden min-h-screen'>            
        {/* background image */}

            {/* Hero Text - Left Side */}
            <div className="relative z-10 ml-8 md:ml-16 lg:ml-32 py-6 max-w-2xl">
                {/* trust indicator */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-white/90 ml-2 text-sm">4.1 (600+ reviews)</span>
                    </div>
                </div>
                <span className="text-4xl md:text-8xl lg:text-8xl max-w-xl bg-gradient-to-r from-orange-600 to-brand-primary font-heading bg-clip-text text-transparent leading-[0.9] tracking-tight font-bold mb-2">
                    {HERO_HEADING}
                </span>
                <p className="lg:text-3xl mb-6 max-w-xl text-primary-foreground/90">
                    {HERO_SUBTEXT}
                </p>
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <Button size="xl" className="bg-brand-primary px-10 py-4  text-lg font-medium tracking-wide font-heading z-50">
                        <Link className='lg:text-3xl' href={"/"}>{HERO_CTA_TEXT}</Link>
                    </Button>
                    <Button size="xl" variant={'outline'} className=" px-10 py-4  text-lg font-medium tracking-wide font-heading z-50">
                        <Link className='lg:text-3xl' href={"/"}>View Menu</Link>
                    </Button>
                </div>
            </div>

            {/* Hero Image - Right Side */}
            <div className='relative  mr-8 md:mr-16 lg:mr-26  '>
                <div className='absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-3xl opacity-30 scale-150'>

                </div>
                <Image
                    src={'/hero-trans.png'}
                    alt='hero image'
                    width={700}
                    height={600}
                    className="object-contain z-50"
                />
            </div>

        </section>
    )
}

export default Hero