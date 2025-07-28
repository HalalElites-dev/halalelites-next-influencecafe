import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
const CTASection = () => {
  return (
    <section id='contact' className='py-26 px-6 bg-white '>
      <div className='max-w-7xl mx-auto text-center'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl uppercase text-foreground mb-8 leading-tight tracking-tight">
              Visit <span className="text-brand-primary">Us</span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl  text-brand-secondary mb-6 text-left"><span className='text-3xl font-heading'>Maryam&apos;s</span>  is conveniently located on XYZ High Street in Columbus, Ohio, offering a central and accessible location for our guests to enjoy their dining experience.
                  <br />Have any questions or inquiries? Feel free to reach out to us. We would love to hear from you.</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Address</h4>
                      <p className="text-brand-secondary/80 text-left">
                        123 Heritage Street
                        <br />
                        Downtown District
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Phone</h4>
                      <p className="text-brand-secondary/80">(555) 123-4567</p>
                      <p className="text-brand-secondary/80">(555) 123-4568</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Email</h4>
                      <p className="text-brand-secondary/80 text-left">info@Maryamrestaurant.com</p>
                      <p className="text-brand-secondary/80 text-left">reservations@Maryamrestaurant.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1 text-left">Hours</h4>
                      <div className="text-brand-secondary/80 space-y-1 text-left">
                        <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                        <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                        <p>Sunday: 12:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-brand-primary  text-restaurant-cream font-bold"
                >
                  Order Now
                </Button>

              </div>
            </div>

            {/* Google Maps */}
            <div className="h-full rounded-lg overflow-hidden border border-brand-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.952515065971!2d-82.9703598!3d40.0318396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388bcb4d73ac11%3A0xa5cc1be035101265!2sMaryam&#39;s%20Halal%20%22Taste%20of%20New%20York%22!5e0!3m2!1sen!2sae!4v1753661413723!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maryam's Halal Taste of Newyork"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection