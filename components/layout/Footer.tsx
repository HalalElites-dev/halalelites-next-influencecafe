'use client';
import Link from "next/link";
import { SITE_TITLE, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";

const Footer = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <footer className="bg-black text-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* Call-to-Action Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 font-body">The Good Stuff, Backed by Science</h3>
          <p className="max-w-xl mb-8">We’re all about the science behind what you eat and drink. From the caffeine that boosts your focus to the antioxidants in our desserts, everything on our menu is here to help you thrive</p>
          <a href="/contact" className="inline-block">
            <Button className="bg-white text-black font-semibold py-6 px-8 rounded-lg hover:bg-white/90 transition cursor-pointer" >
              Visit Us
            </Button>
          </a>
        </div>

        {/* Main Footer Content - Integrated your existing lists */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16 border-t border-gray-700 pt-8">
          {/* Left section - Brand (from your original) */}
          <div className="mb-8 lg:mb-0">
            <Link href="/">
              <Image src="/logo.webp" alt="Two Spoons" width={126} height={60} className="w-full h-full invert" /> 
            </Link>
          </div>

          {/* Quick Links Column (from your original) */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center mb-8 lg:mb-0 font-bold uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  " transition-colors relative group",
                )}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Media Icons (new section) */}
          <div className="flex space-x-4">
            <a href="mailto:admin@influencecafe.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors">
              <Mail className="w-4 h-4 " width={16} height={16}  />
            </a>
            <a href="https://www.google.com/maps?ll=41.677419,-83.622672&z=17&t=m&hl=en&gl=AE&mapclient=embed&q=Secor+Rd+%26+Central+Ave+Toledo,+OH+43606+USA" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors">
              <MapPin className="w-4 h-4  " width={16} height={16} />
            </a>
            <a href="tel:(567) 315-8152" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
              <Phone className="w-4 h-4  " width={16} height={16}  />
            </a>
          </div>
        </div>

        {/* Bottom Section - Integrated new design */}
        <div className=" text-sm mt-8 pt-4 border-t border-gray-700">
          {/* Copyright/Credits */}
          <div className="mb-4 lg:mb-0 text-center ">
            Developed By <a href="https://halalelites.dev/" className="hover:text-brand-secondary">Halal-Elites</a> | © {new Date().getFullYear()} {SITE_TITLE}
          </div>

          {/* Additional Links (from original example) */}
          {/* <div className="flex space-x-4">
            <a href="/style-guide" className="hover:text-amber-400">Style Guide</a>
            <span className="text-gray-500">|</span>
            <a href="/license" className="hover:text-amber-400">Licence</a>
            <span className="text-gray-500">|</span>
            <a href="/change-log" className="hover:text-amber-400">Changelog</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;