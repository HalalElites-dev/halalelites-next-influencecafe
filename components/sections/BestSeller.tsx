import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const BestSelling = () => {
    return (
        <section id="menu" className='relative overflow-y-visible overflow-x-hidden bg-white'>
             <div className="hidden xl:block absolute top-65 -left-95 transform -translate-y-1/2 rotate-45 z-40">
                    <Image
                      src="/hero.webp"
                      alt="Cup"
                      width={600}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden xl:block absolute top-65 -right-95 transform -translate-y-1/2 -rotate-360 z-40">
                    <Image
                      src="/hero.webp"
                      alt="Cup"
                      width={600}
                      height={200}
                      className="object-contain"
                    />
                  </div>
            {/* Colored background section - only covers the top part */}
            <div className=' bg-[#f8f5ef] relative -pb-30'>
                <div className='max-w-7xl mx-auto py-20 px-6'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
                        {/* Left Column - Content Only */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-3'>
                                <span className='text-muted-foreground uppercase tracking-wider text-sm font-medium'>
                                    What Makes Us Unique
                                </span>
                               
                            </div>
                            <h2 className='text-4xl lg:text-6xl font-bold text-black leading-tight uppercase font-body'>
                                A Cut Above the Rest
                            </h2>
                            <Button
                                                           size="lg"
                                                           className="px-6 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform "
                                                       >
                                                           <Link href="/contact">
                                                               Visit Us
                                                           </Link>
                                                       </Button>
                        </div>

                        {/* Right Column - Features Only */}
                        <div>
                            <ul className='space-y-8'>
                                <li className='flex gap-4 items-start'>
                                    <span className='text-4xl font-bold text-black text-opacity-90 leading-none'>
                                        01
                                    </span>
                                    <p className='text-muted-foreground text-lg leading-relaxed pt-1'>
                                        Every drink and dessert is available in <strong className='text-black'>zero-sugar options</strong>, making us inclusive for health-conscious and diabetic customers who don&apos;t have to compromise on taste or experience.
                                    </p>
                                </li>
                                <li className='flex gap-4 items-start'>
                                    <span className='text-4xl font-bold text-black text-opacity-90 leading-none'>
                                        02
                                    </span>
                                    <p className='text-muted-foreground text-lg leading-relaxed pt-1'>
                                        <strong className='text-black'>Interactive education:</strong> QR codes on our menu link to science-based insights on ingredients like caffeine, sugar, and antioxidants—learn about what you&apos;re drinking while you enjoy it.
                                    </p>
                                </li>
                                <li className='flex gap-4 items-start'>
                                    <span className='text-4xl font-bold text-black text-opacity-90 leading-none'>
                                        03
                                    </span>
                                    <p className='text-muted-foreground text-lg leading-relaxed pt-1'>
                                        <strong className='text-black'>Community engagement:</strong> Fun weekly challenges, educational talks, and collaborations with local schools, universities, and healthcare groups bring our community together around wellness.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* White background section - contains image and testimonial */}
            <div className='bg-white relative'>
                <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
                        {/* Left Column - Image */}
                        <div className='-mt-10 lg:-mt-50'>
                            <div className='relative rounded-2xl overflow-hidden '>
                                <Image 
                                    src="/cafe.webp" 
                                    alt="Barista preparing healthy beverage" 
                                    className='w-full h-[350px] lg:h-[400px] object-cover shadow-md'
                                    width={600}
                                    height={400}
                    
                                />
                            </div>
                        </div>

                        {/* Right Column - Testimonial */}
                        <div className='flex items-end pb-16 lg:pb-20'>
                            <div className='bg-white rounded-2xl p-6  w-full'>
                                <div className='flex items-start gap-3 mb-4'>
                                    <svg className='w-10 h-10 bg-[#f8f5ef] flex-shrink-0 opacity-40' fill="currentColor" viewBox="0 0 100 93" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.94 84H0L18.305.854H55L22.94 84ZM67.94 84H45L63.305.854H100L67.94 84Z"/>
                                    </svg>
                                </div>
                                <p className='text-muted-foreground text-lg leading-relaxed mb-4'>
                                    Finally, a place where I can enjoy delicious drinks without worrying about my blood sugar. The educational aspect makes it even better—I love learning about what I&apos;m consuming!
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSelling