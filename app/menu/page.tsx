"use client"
import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { menuData, flavorOptions } from "@/lib/constants"
import { ProductModal } from "@/components/product-modal"
import { Badge } from "@/components/ui/badge"
// import Image from "next/image"

// Define proper types for menu items
interface MenuItem {
  name: string
  description: string
  callout?: string
  sweetener?: string
  price: string | { [key: string]: string }
  size?: string
  image?: string
  disabled?: boolean
}

interface MenuSectionProps {
  id: string
  title: string
  note?: string
  sizeNote?: string
  items: MenuItem[]
  onItemClick: (item: MenuItem) => void
}

const MenuSection = ({ id, title, note, sizeNote, items, onItemClick }: MenuSectionProps) => (
  <div id={id} className="mb-16 scroll-mt-28">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-5xl font-bold text-brand-primary font-body inline-block relative">
        {title}
      </h2>
      {sizeNote && (
        <p className="text-sm text-gray-500 mt-2 font-medium tracking-wide">
          {sizeNote}
        </p>
      )}
      {note && (
        <p className="text-sm text-gray-500 mt-1 font-medium italic">
          {note}
        </p>
      )}
    </div>

    {/* 1 column mobile, 2 columns desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center border-b border-gray-200 pb-6 rounded-lg p-4 transition-colors duration-200 w-full ${item.disabled ? "cursor-default" : "cursor-pointer hover:bg-gray-50"}`}
          onClick={() => !item.disabled && onItemClick(item)}
        >
          {/* ✅ Only show image if NOT in the "Modern Desserts" section */}
          {/* {title !== "Modern Desserts" && (
            <div className="w-30 h-30 rounded overflow-hidden flex-shrink-0 mr-4">
              <Image
                src={item.image || "/scene.webp"}
                alt={item.name}
                className="w-full h-full object-cover"
                width={1980}
                height={1080}
              />
            </div>
          )} */}

          {/* Text */}
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              {item.size && (
                <span className="text-sm font-medium text-brand-primary">{item.size}</span>
              )}
              {item.callout && (
                <Badge
                  variant="secondary"
                  className="border border-brand-primary/20 bg-brand-primary/10 text-brand-primary"
                >
                  {item.callout}
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
            {item.sweetener && (
              <p className="text-xs text-gray-500 mt-1 font-medium">{item.sweetener}</p>
            )}

          </div>
          {item.price && (
            <div className="ml-4 flex-shrink-0 text-right font-semibold text-gray-800">
              {typeof item.price === "string"
                ? item.price
                : Object.entries(item.price).map(([label, p]) => (
                    <div key={label || p} className="text-sm">{label ? `${label}: ${p}` : p}</div>
                  ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const FlavorsSection = () => {
  const allFlavors = [
    ...flavorOptions.naturallySweetened.map((f) => ({ name: f, zeroSugar: false, key: `nat-${f}` })),
    ...flavorOptions.zeroSugar.map((f) => ({ name: f, zeroSugar: true, key: `zero-${f}` })),
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary font-body">
          Flavors
        </h2>
        <p className="text-sm mt-2 font-medium tracking-wide text-gray-500">
          Naturally Sweetened&nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="text-brand-primary">Zero-Sugar</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-2xl mx-auto">
        {allFlavors.map((flavor) => (
          <span
            key={flavor.key}
            className={`text-sm font-semibold tracking-wide ${flavor.zeroSugar ? "text-brand-primary" : "text-gray-800"}`}
          >
            {flavor.name}
          </span>
        ))}
      </div>
    </div>
  )
}

const Page = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-[center_40%] md:bg-[center_60%]" style={{ backgroundImage: "url(/coffee-machine.png)" }}>
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 flex flex-col items-center xl:items-start justify-center h-full text-white px-5 xl:px-26 text-center xl:text-left pt-30 lg:pt-20">
          <h1 className="text-5xl font-bold mb-4 font-body">
            Menu
          </h1>
          <div className="flex items-center text-sm text-white justify-center xl:justify-start">
            <span><Link className="hover:underline" href="/">Home</Link></span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">Menu</span>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {menuData.map((section) => (
          <MenuSection
            key={section.title}
            id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}
            title={section.title}
            note={section.note}
            sizeNote={(section as { sizeNote?: string }).sizeNote}
            items={section.items as MenuItem[]}
            onItemClick={handleItemClick}
          />
        ))}
        <FlavorsSection />
      </div>

      <ProductModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Page
