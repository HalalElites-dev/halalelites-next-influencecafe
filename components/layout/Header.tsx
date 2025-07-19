'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { MobileMenu } from '@/components/layout/mobileMenu'
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header className='z-50 sticky bg-background top-0 right-0 left-0 '>
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  '>
                <nav className='grid grid-cols-3 items-center min-h-16'>
                    {/* left section: Site title or logo*/}

                    <div className='flex items-center space-x-2 justify-start'>
                        <Image
                            alt='logo'
                            src='/snappers-logo.png'
                            width={120}
                            height={100}
                        />

                    </div>


                    {/* middle section: Desktop Navigation */}
                    <div className="hidden md:flex justify-center  ">
                        <Navigation />
                    </div>


                    {/* Right Section: Theme Toggle, CTA Button (Desktop) & Mobile Menu (Mobile) */}
                    <div className='flex items-center justify-end '>
                        {/* Desktop Items */}
                        <div className="hidden md:flex items-center space-x-2 h-16">

                            <Button  size="lg" className='bg-brand-primary text-primary-foreground h-full font-heading '>
                                <Link className='text-xl' href={'tel:+4194075670'}>ORDER NOW</Link>

                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden'>

                            <MobileMenu />
                        </div>
                    </div>


                </nav>
            </div>

        </header>
    )
}