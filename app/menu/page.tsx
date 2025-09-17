import { ChevronRight } from "lucide-react"
import Link from "next/link";
import React from "react"
import { menuData } from "@/lib/constants";

// Define proper types for menu items
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-brand-primary font-body">
      {title}
    </h2>

    {/* 1 column mobile, 2 columns desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center border-b border-gray-200 pb-6"
        >
          {/* Image */}
          <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 mr-4">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>

          {/* Price */}
          <div className="text-lg font-bold text-gray-800 ml-4">
            {item.price}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(/banner.webp)" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-white px-5 md:px-26">
          <h1 className="text-5xl font-bold mb-4 font-body">Menu</h1>
          <div className="flex items-center text-sm text-white">
             <span><Link className="hover:underline" href="/">Home</Link></span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">Menu</span>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {Object.entries(menuData).map(([sectionTitle, items]) => (
          <MenuSection key={sectionTitle} title={sectionTitle} items={items as MenuItem[]} />
        ))}
      </div>
    </div>
  );
};

export default page;