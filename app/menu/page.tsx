"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@/lib/utils/supabase/client"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProductModal } from "@/components/product-modal"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  category?: string
  is_available?: boolean
  calories?: number
  sugar?: string
  protein?: string
  fat?: string
  science_highlight?: string
  mechanism_description?: string
  learn_more_url?: string
}

export default function Page() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const supabase = createBrowserClient()

    async function fetchMenu() {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("is_available", true)
        .order("category", { ascending: true })
        .order("name", { ascending: true })

      if (error) console.error(error)
      else setMenuItems(data || [])
      setLoading(false)
    }

    fetchMenu()
  }, [])

  // group items by category
  const grouped = menuItems.reduce((acc, item) => {
    const cat = item.category || "Other"
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="relative h-80 bg-cover bg-center "
        style={{ backgroundImage: "url(/bannerz.webp)" }}
      >
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
      </div>

      {/* Menu List */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {loading && <p className="text-center">Loading menu...</p>}
        {!loading && Object.entries(grouped).map(([section, items]) => (
          <div key={section} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">{section}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-200 pb-6 cursor-pointer hover:bg-gray-50 rounded-lg p-4 transition"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src={item.image_url || "/scene.webp"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      width={1000}
                      height={800}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-lg font-bold ml-4">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
