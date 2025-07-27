'use client';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import Image from 'next/image'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button - Only show when menu is closed */}
      {!isOpen && (
        <Button
          variant="default"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="md:hidden rounded-full bg-brand-secondary fixed right-5 top-6"
        >
          <Menu className="h-10 w-10" />
        </Button>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed right-0 top-0  w-full max-w-5xl bg-background animate-in slide-in-from-right duration-300 rounded-l-2xl border-l shadow-2xl border-brand-secondary">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-secondary">
              {/* Logo */}
              <div className="flex items-center">
                <Image alt='logo' src='/logo.png' width={120} height={100} />
              </div>
              
              {/* Close Button */}
              <Button
                variant="default"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-brand-secondary"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-6">
                <Navigation onNavigate={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}