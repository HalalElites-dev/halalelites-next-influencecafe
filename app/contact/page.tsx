import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(/bannerz.webp)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center xl:items-start justify-center h-full text-white px-5 xl:px-26 text-center xl:text-left pt-30 lg:pt-20">
          <h1 className="text-5xl font-bold mb-4 font-body">Contact Us</h1>
          <div className="flex items-center text-sm text-white justify-center xl:justify-start">
            <span>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          We&apos;d love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to reach out.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8 text-lg">
            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 text-brand-secondary" />
              <p className="text-gray-800 font-medium text-xl">
                (567) 315-8152
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 text-brand-secondary" />
              <p className="text-gray-800 font-medium text-xl">
                admin@influencecafe.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-7 h-7 text-brand-secondary" />
              <p className="text-gray-800 font-medium text-xl">
                3324 Secor Rd. Suite 2 & 3, Toledo, OH, 43606
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mt-6">
              Influence Cafe is a specialty coffee shop and educational hub
              located at the high-traffic intersection of Central Avenue and
              Secor Road in Toledo, OH, adjacent to Chick-fil-A and Home Depot.
            </p>
          </div>

          {/* Right - Map */}
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1637.0796784497795!2d-83.62383545669785!3d41.6781323603972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c7f3b6bbbb34d%3A0x179c4ede267cf480!2sSecor%20Rd%20%26%20Central%20Ave%2C%20Toledo%2C%20OH%2043606%2C%20USA!5e0!3m2!1sen!2sae!4v1757846516264!5m2!1sen!2sae"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
