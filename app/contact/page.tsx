import { ChevronRight } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
     <section className="min-h-screen bg-gray-50">
      <div
        className="relative h-80 bg-cover bg-center "
        style={{ backgroundImage: "url(/banner.webp)" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col items-left justify-center h-full text-white px-5 md:px-26">
          <h1 className="text-5xl font-bold mb-4 font-body">
            Contact Us
          </h1>
          <div className="flex items-center text-sm text-white">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2 " />
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default page