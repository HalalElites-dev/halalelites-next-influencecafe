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
              src={'/placeholder.svg'}
              alt=''
              fill
              className='invert'
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className='space-y-8'>
            <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
              Since 1990
            </div>
            
            <div>
              <h2 className='text-5xl  text-brand-secondary mb-8 leading-tight upper'>
                Serving Traditional <span className='text-brand-primary'>Yemini & Mediterranean Cuisine to Toledo</span> 
              </h2>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Founded by the  family, our restaurant brings the rich culinary traditions of Yemen&apos;s Hadramout region to life. Every dish tells a story of ancient spice routes, family recipes, and the warm hospitality that defines Yemeni culture.
                </p>
                <p>
                 From our signature Mandi and Zurbian to traditional Fahsah and fresh Yemeni bread, we use only the finest ingredients and time-honored cooking methods to ensure an authentic dining experience.
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


