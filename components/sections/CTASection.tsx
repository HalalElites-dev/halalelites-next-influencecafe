import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const CTASection = () => {
  return (
   <section id='contact' className='py-26 px-6 bg-background '>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='text-center mb-16'>
          <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
              Contact Us
            </div>
          <h1 className='text-5xl lg:text-6xl font-bold text-brand-secondary mb-8 leading-tight'>Visit Us Today</h1>
          <p className='space-y-6 text-lg text-foreground leading-relaxed'>Come experience the best fried chicken and fish in town. We can&apos;t wait to serve you!</p>

        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* left side */}
       <div>
         {/* image container */}
        <div className='mb-8 flex justify-center'>
          <div className='relative w-full h-84 lg:h-96'>
            <Image
              className='w-full h-full object-contain'
              src={'/about.png'}
              fill
              alt='CTA'
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className='mb-4'>
          <Button
          size={'lg'}
          variant={'default'}
          className='bg-brand-primary font-heading text-2xl px-10 py-6 tracking-wide'
        >
          <a href="tel:+4194075670">(419) 407-5670</a>

        </Button>
        </div>
        <h3 className='text-xl font-medium uppercase tracking-wide'>call for order</h3>
       </div>

      {/* right side */}
       <div className='flex flex-col justify-center'>
        {/* Google Maps */}
        <div className='mb-8'>
          <div className='w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.2!2d-83.5379!3d41.6528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c790eefe68fbd%3A0x48cb46c30e8e7605!2sSnappers%20Chicken%20and%20Fish!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              className='w-full h-full'
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Snappers Chicken and Fish Location"
            ></iframe>
          </div>
        </div>

        {/* Working Hours */}
        <div className='text-left'>
          <h3 className='text-xl font-semibold mb-4 text-center'>Working Hours</h3>
          <div className='bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10'>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between items-center py-1'>
                <span className='font-medium'>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className='flex justify-between items-center py-1'>
                <span className='font-medium'>Friday - Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className='flex justify-between items-center py-1'>
                <span className='font-medium'>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
    
       </div>
      </div>
      </div>
    </section>
  )
}

export default CTASection