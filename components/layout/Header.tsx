'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { MobileMenu } from '@/components/layout/mobileMenu'
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';





export function Header() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-background backdrop-blur-sm shadow-lg" : "bg-transparent"
            }`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-1'>
                <nav className='grid grid-cols-3 items-center h-20 overflow-hidden'>
                    {/* left section: Site title or logo*/}
                    <div className='flex items-center space-x-2 justify-start rounded-4xl'>
                        <Link href={'#'}>
                            <div className="w-20 h-20 flex items-center">
                                <Image
                                    src="/logo.jpg"
                                    alt="Maryam's Logo"
                                    width={70}
                                    height={100}
                                    className="rounded-full"
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
                            <Button className=' rounded-full px-4 py-2 bg-brand-primary text-primary-foreground font-body'>
                                <Link href={'tel:+4194075670'}>Order Now</Link>
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