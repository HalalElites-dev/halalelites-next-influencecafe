import { ChevronRight } from "lucide-react";
import React from "react";
const menuData = {
  "Signature Espresso Drinks": [
    {
      name: "Influence Latte",
      description: "Classic latte with a twist of creativity",
      price: "$5.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Shot of Genius",
      description: "Bold, rich espresso to ignite your day",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Cappuccino",
      description: "Creamy foam layered perfectly with espresso",
      price: "$4.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Mocha",
      description: "Chocolate meets espresso for a dreamy fusion",
      price: "$5.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Desert Coffee",
      description: "Premium Arabian-style coffee brewed with aromatic spices",
      price: "$6.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Affogato",
      description: "Vanilla ice cream with espresso shot",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Specialty Teas": [
    {
      name: "Adeni Gold Chai",
      description: "Traditional spiced milk tea",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Hibiscus",
      description: "A vibrant, antioxidant-rich herbal refresher",
      price: "$3.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Royal Black",
      description: "Smooth, bold, and timeless black tea",
      price: "$3.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Matcha Latte",
      description: "Premium matcha powder with steamed milk",
      price: "$5.25",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Brewed Coffee": [
    {
      name: "Just Black",
      description: "Deep, rich hot coffee with a bold finish",
      price: "$3.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Cold Influence",
      description: "Refreshingly smooth cold brew with less acidity",
      price: "$4.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Arabica Essence",
      description: "100% authentic Arabica beans for smooth, luxurious flavor",
      price: "$4.50",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
  "Modern Desserts": [
    {
      name: "Dream Cake",
      description: "Soft cake with rich cream and choice of topping",
      price: "$6.50",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Dubai Strawberry Cup",
      description: "Chocolate sauce layered with Kunafa and strawberry",
      price: "$7.25",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Dubai Chocolate Bar",
      description: "Premium chocolate filled with kunafa and pistachio cream",
      price: "$8.00",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Berry Bliss Fusion",
      description: "Fresh strawberries with choice of chocolate sauce",
      price: "$5.75",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Flat Croissant",
      description: "Toasted croissant topped with your choice of sauce",
      price: "$4.25",
      image: "/placeholder.svg?height=120&width=120",
    },
  ],
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const MenuSection = ({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) => (
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
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Menu</span>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {Object.entries(menuData).map(([sectionTitle, items]) => (
          <MenuSection key={sectionTitle} title={sectionTitle} items={items} />
        ))}
      </div>
    </div>
  );
};

export default page;
