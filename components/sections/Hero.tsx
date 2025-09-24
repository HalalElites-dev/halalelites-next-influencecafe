'use client';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image";
const leftVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 1, 1] as [number, number, number, number], } },
};

const rightVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 1, 1] as [number, number, number, number], delay: 0.4 } },
};

// New variant for the icons container
const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.2, // Start icons animation after right section
      staggerChildren: 0.5, // Stagger each icon's animation
    },
  },
};

// New variant for each individual icon
const iconItemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
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
              asChild
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              <a href="/contact" className="flex items-center gap-2 py-6 px-8">
                Visit Us
              
              </a>
            </Button>
            <Button size="lg" variant={"link"} className="text-black px-8 py-4 text-lg font-semibold">
              <a href="/menu">Explore Our Menu</a>
            </Button>
          </div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
        >
          <div className="relative w-full md:h-[600px] flex items-center justify-center">
            {/* Coffee Cup */}
            <Image
              src="/text.png"
              alt="hero image"
              width={600}
              height={400}
              className="xl:ml-20 mx-auto"
            />

            {/* --- Desktop / Laptop Floating Icons --- */}
            <motion.div
              className="hidden lg:block absolute inset-0"
              initial="hidden"
              animate="visible"
              variants={iconContainerVariants}
            >
              {/* Top Right */}
              <motion.div
                className="absolute top-[15%] right-[10%] lg:-right-[5%] md:top-[20%] md:right-[15%] xl:right-[10%] flex items-center gap-4"
                variants={iconItemVariants}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/flavors.svg" alt="Natural Flavors" width={34} height={34} />
                </div>
                <span className="text-sm lg:text-lg font-medium text-gray-800 tracking-wide">
                  RICH FLAVOR
                </span>
              </motion.div>

              {/* Left Middle */}
              <motion.div
                className="absolute top-[35%] lg:top-[40%] left-[5%] md:top-[45%] md:left-[10%] xl:left-[65%] xl:top-[32%] flex items-center gap-4"
                variants={iconItemVariants}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/svg1.webp" alt="100% Premium" width={30} height={34} />
                </div>
                <span className="text-sm lg:text-lg font-medium text-gray-800 tracking-wide">
                  100% PREMIUM
                </span>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="absolute bottom-[25%] right-[0%] lg:bottom-[20%] lg:right-[5%] md:bottom-[10%] md:right-[20%] xl:right-[10.5%] xl:top-[19%] flex items-center gap-4"
                variants={iconItemVariants}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/svg3.webp" alt="Sugar Free" width={34} height={34} />
                </div>
                <span className="text-sm lg:text-lg font-medium text-gray-800 tracking-wide">
                  SUGAR FREE
                </span>
              </motion.div>
            </motion.div>

            {/* --- Mobile Stacked Icons (fallback) --- */}
            <div className="flex flex-row items-center mt-4 lg:hidden w-full absolute left-0 right-0 bottom-0 gap-2 md:gap-6 translate-y-full justify-center ml-1 m-auto">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/flavors.svg" alt="Natural Flavors" width={36} height={28} />
                </div>
                <span className="text-base font-medium text-gray-800">RICH FLAVOR</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/svg1.webp" alt="100% Premium" width={28} height={30} />
                </div>
                <span className="text-base font-medium text-gray-800">100% PREMIUM</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <Image src="/svg3.webp" alt="Sugar Free" width={36} height={28} />
                </div>
                <span className="text-base font-medium text-gray-800">SUGAR FREE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
