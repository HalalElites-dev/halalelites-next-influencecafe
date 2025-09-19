'use client';
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";

const leftVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 1, 1] as [number, number, number, number], } },
};

const rightVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 1, 1] as [number, number, number, number], delay: 0.4 } },
};

const Hero = () => {
    return (
        <section id="home" className="bg-background">
            {/* hero section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-20 mx-auto max-w-7xl xl:max-w-[1800px] py-32 md:py-30 xl:py-38">
                {/* left section */}
                <motion.div
                    className="text-center lg:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={leftVariants}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-body mb-6 leading-tight">
                        Coffee. Wellness. Influence.
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:max-w-2xl leading-relaxed">
                        A specialty café in Toledo where every sip and bite comes with knowledge, health, and flavor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                        >
                            <Link href="/contact" className="flex items-center gap-2">
                                Visit Us
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant={"link"} className="text-black px-8 py-4 text-lg font-semibold">
                            <Link href="/menu">Explore Our Menu</Link>
                        </Button>
                    </div>
                </motion.div>
                {/* right section */}
                <motion.div
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    variants={rightVariants}
                >
                    <Image src="/text.png" alt="hero image" width={600} height={400} className="xl:ml-20 mx-auto" />
                    <div className="absolute bottom-0 md:bottom-25 lg:bottom-0 xl:bottom-55 right-0 lg:-right-20 xl:right-15 space-y-8 opacity-50 md:opacity-100">
                        <div className="flex flex-col items-start gap-6">
  {/* Rich Flavor */}
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300">
      <img src="/flavors.svg" alt="Natural Flavors" className="w-10 h-10" />
    </div>
    <span className="text-lg font-medium text-gray-800 tracking-wide">
      RICH FLAVOR
    </span>
  </div>

  {/* 100% Premium */}
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300">
      <img src="/svg1.webp" alt="100% Premium" className="w-8 h-10" />
    </div>
    <span className="text-lg font-medium text-gray-800 tracking-wide">
      100% PREMIUM
    </span>
  </div>

  {/* Sugar Free */}
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300">
      <img src="/svg3.webp" alt="Sugar Free" className="w-10 h-10" />
    </div>
    <span className="text-lg font-medium text-gray-800 tracking-wide">
      SUGAR FREE
    </span>
  </div>
</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
