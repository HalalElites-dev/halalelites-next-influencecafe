import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
     <section className="min-h-screen bg-gray-50">
      <div
        className="relative h-80 bg-cover bg-center "
        style={{ backgroundImage: "url(/bannerz.webp)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center xl:items-start justify-center h-full text-white px-5 xl:px-26 text-center xl:text-left pt-20">
          <h1 className="text-5xl font-bold mb-4 font-body">
            Pharmacology
          </h1>
          <div className="flex items-center text-sm text-white justify-center xl:justify-start">
            <span><Link className="hover:underline" href="/">Home</Link></span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">Pharmacology</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page