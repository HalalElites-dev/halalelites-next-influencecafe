'use client';
import Link from "next/link"
import { FOOTER_TEXT, SITE_TITLE, SOCIAL_LINKS, NAV_LINKS, CONTACT_ADDRESS, CONTACT_HEADING, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/constants"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { cn, scrollToSection } from "@/lib/utils"
const Footer = () => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };
  return (
    <footer className="border-t py-8 px-6 bg-brand-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Left section - Brand and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 gap-2">
              <Image src="/logo.png" alt="Two Spoons" width={100} height={100} className="brightness-0 " />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6 max-w-xs">{FOOTER_TEXT}</p>
            <div className="flex items-center gap-4 text-white">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors group relative"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5 text-secondary" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>

                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className=" text-2xl text-secondary mb-4 font-heading font-bold">Quick Links</h3>
            <ul className="space-y-3 text-secondary ">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "transition-colors text-xl relative group ",

                    )}
                    onClick={(e) => handleClick(e, link.href)}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>

                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
          {/* Contact Column */}
          <div>
            <h3 className="text-2xl mb-8 text-secondary font-heading font-bold">{CONTACT_HEADING}</h3>
            <div className="space-y-6">
              <div className="flex items-baseline space-x-4 text-secondary">
                <MapPin className="w-6 h-6 text-secondary" />
                <div>
                  <div className="text-secondary ">{CONTACT_ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-secondary" />
                <div className="text-secondary ">{CONTACT_PHONE}</div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-secondary" />
                <div className="text-secondary ">{CONTACT_EMAIL}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-accent-foreground">
          <p className="text-sm  mb-4 sm:mb-0 text-secondary">© 2025 {SITE_TITLE}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
