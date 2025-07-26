'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { MobileMenu } from '@/components/layout/mobileMenu'
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export function Header() {
    return (
      <header className='z-50 fixed bg-background top-0 right-0 left-0'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='grid grid-cols-3 items-center h-20 overflow-hidden'> {/* Added overflow-hidden */}
            {/* left section: Site title or logo*/}
            <div className='flex items-center space-x-2 justify-start'>
                <Link href={'#'}>
                    <div className="w-20 h-20 flex items-center"> {/* Container to constrain logo */}
                        <Image
                            alt='logo'
                            src='/logo.png'
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </Link>
            </div>

            {/* Rest of your code stays the same */}
            <div className="hidden md:flex justify-center">
                <Navigation />
            </div>

            <div className='flex items-center justify-end'>
                <div className="hidden md:flex items-center space-x-2">
                    <div className="flex items-center space-x-2 text-brand-secondary">
                        <Phone className="h-4 w-4 text-brand-primary" />
                        <span className="text-sm">(555) 123-4567</span>
                    </div>
                    <Button className='bg-brand-primary text-primary-foreground font-bold'>
                        <Link className='camelcase' href={'tel:+4194075670'}>Order Now</Link>
                    </Button>
                </div>
                <div className='md:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </nav>
    </div>
</header>
    )
}