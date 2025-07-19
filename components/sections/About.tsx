import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section id='about' className="py-30 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className='grid lg:grid-cols-2 gap-16 items-start '>
           {/* Left side - Image placeholder */}
          <div className='relative'>
            <div className="w-full h-[300px] lg:h-[600px]  rounded-lg flex items-center justify-center">
              <Image
              src={'/about.png'}
              alt='about chimken'
              fill
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className='space-y-8'>
            <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
              Since 1990
            </div>
            
            <div>
              <h2 className='text-5xl font-bold text-brand-secondary mb-8 leading-tight'>
                A Local Tradition of Flavor
                <br />
                <span className="text-brand-primary">A Tradition</span> For Your
                <br />
                Family
              </h2>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  At Snapper’s, we’re more than just fast food — we’re a Toledo staple. For years, our mission has been simple: serve mouthwatering fried chicken, golden seafood, and hearty sides made with love and seasoned just right. 
                </p>
                <p>
                 Whether you&apos;re a first-timer or a loyal regular, you’ll always feel at home here.
                </p>
              </div>
            </div>
           
        </div>
        </div>
       
      </div>
    </section>
  )
}

export default About


