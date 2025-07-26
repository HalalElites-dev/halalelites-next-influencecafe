import React from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import { Card } from '../ui/card'
import { Star } from 'lucide-react'
const Testimonials = () => {
    return (
        <section id='testimonials' className='py-24 px-6 bg-background'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-20'>

                    <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
                        Testimonials
                    </div>

                    <h2 className='text-5xl md:text-6xl uppercase text-foreground mb-8 leading-tight tracking-tight'>
                        What Our <span className='text-brand-primary'>Customers Say</span> 
                    </h2>
                    
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Card key={index} className='bg-secondary p-10 shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between h-full'>
                            <div className='flex mb-6'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className='w-6 h-6 fill-brand-primary text-brand-primary' />
                                ))}
                            </div>
                            <p className='text-foreground mb-8 text-lg leading-relaxed italic'>
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <div className='font-bold text-foreground text-xl mb-1'>{testimonial.author}</div>
                                <div className='text-muted-foreground text-sm'>{testimonial.role}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials