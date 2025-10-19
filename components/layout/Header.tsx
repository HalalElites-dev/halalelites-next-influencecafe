"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/constants"

const Navigation = ({ scrollY, onNavigate }: { scrollY: number; onNavigate?: () => void }) => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col lg:flex-row items-start md:items-center space-y-3 lg:space-y-0 lg:space-x-20">
      {NAV_LINKS.map((item, index) => {
        const isActive = pathname === item.href || 
                        (item.href !== '/' && pathname.startsWith(item.href))
        
        return (
            <Link
            key={index}
            href={item.href}
            onClick={onNavigate}
            className={`relative transition-colors duration-200 w-full py-2 md:py-0 uppercase font-bold md:text-3xl lg:text-lg
          text-brand-primary group
          ${isActive 
          ? 'lg:!text-black'
          : scrollY > 50 
            ? 'lg:!text-gray-600 hover:!text-brand-primary' 
            : 'lg:!text-gray-600 hover:!text-brand-primary'
          }
        `}
            >
            <span className="relative inline-block">
              {item.label}
              {isActive && (
              <span className="lg:hidden absolute left-0 -bottom-1 w-full h-0.5 bg-black"></span>
              )}
            </span>
            </Link>
        )
      })}
    </nav>
  )
}

export function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed left-0 right-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          style={{ 
            top: '5rem',
            height: 'calc(100vh - 5rem)',
            minHeight: 'calc(100dvh - 5rem)'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? " lg:bg-white lg:backdrop-blur-sm md:shadow-lg" : "lg:bg-transparent"
          }`}
      >
        <div suppressHydrationWarning className={'max-w-7xl xl:max-w-[1800px] mx-auto px-4 lg:px-10 transition-all duration-300'}>
          <nav className="flex items-center  justify-between lg:justify-evenly h-20">
            <div className="flex items-center 2k:-ml-50">
              <Link href={"/#home"}>
                <div className="flex items-center">
                  <Image src="/logo.webp" alt="Influence Cafe" width={220} height={100} 
                  sizes="(max-width: 768px) 136px, 280px"/>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex justify-end flex-1 space-x-16">
              <Navigation scrollY={scrollY} />
              <Button
                  asChild
                  className="rounded-lg px-6 py-6 bg-brand-primary text-white text-lg  font-semibold hover:bg-brand-primary/90"
                >
                  <Link href="/contact" target="_blank">
                    Visit Us
                  </Link>
                </Button>
            </div>

            <div className="flex  space-x-4 ">
              <div className="hidden lg:flex items-center space-x-3">
                
                
              </div>

              <div className="lg:hidden">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-full bg-brand-primary h-12 w-12 md:h-12 md:w-12"
                  aria-label="Menu Button"
                >
                  {isMobileMenuOpen ? <X className="h-12 w-12 md:h-24 md:w-24 text-white" /> : <Menu className="h-12 w-12 md:h-12 md:w-12 text-white" />}
                </Button>
              </div>
            </div>
          </nav>
        </div>

        <div
          className={`lg:hidden fixed left-0 right-0 top-20 z-50 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div
            className="w-full bg-white backdrop-blur-lg rounded-b-lg border-t border-brand-primary"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="space-y-3 text-center">
                <Navigation scrollY={scrollY} onNavigate={() => setIsMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}