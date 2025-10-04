"use client"
import React from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { menuData } from "@/lib/constants"
import { ProductModal } from "@/components/product-modal"
import Image from "next/image"

// Define proper types for menu items
interface MenuItem {
  name: string
  description: string
  price: string | { [key: string]: string } //  can handle both string or object
  image?: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  onItemClick: (item: MenuItem) => void
}

const MenuSection = ({ title, items, onItemClick }: MenuSectionProps) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-brand-primary font-body">{title}</h2>

    {/* 1 column mobile, 2 columns desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center border-b border-gray-200 pb-6 cursor-pointer hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200"
          onClick={() => onItemClick(item)}
        >
          {/* Image */}
          <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 mr-4">
            <Image src={item.image || "/scene.webp"} alt={item.name} className="w-full h-full object-cover" width={1000} height={800} />
          </div>

          {/* Text */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>

          {/* Price */}
          <div className="text-sm font-bold text-gray-800 ml-4">
            {typeof item.price === "string"
              ? item.price
              : Object.entries(item.price)
                .map(([size, value]) => `${size.charAt(0).toUpperCase() + size.slice(1)}: ${value}`)
                .join(" | ")}
          </div>

        </div>
      ))}
    </div>
  </div>
)

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
      <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url(/bannerz.webp)" }}>
        <div className="absolute inset-0 bg-black/30"></div>
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
        {Object.entries(menuData).map(([sectionTitle, items]) => (
          <MenuSection
            key={sectionTitle}
            title={sectionTitle}
            items={items as MenuItem[]}
            onItemClick={handleItemClick}
          />
        ))}
      </div>

      <ProductModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default Page
