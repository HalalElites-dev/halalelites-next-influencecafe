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
              <div className="absolute top-[20%] right-[5%] flex flex-col items-start space-y-8">

                {/* Item 1: Rich Flavors */}
                <motion.div
                  className="flex items-center gap-4"
                  variants={iconItemVariants}
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300">
                    <Image src="/flavors.svg" alt="Rich Flavors" width={60} height={34} />
                  </div>
                  <span className="text-lg font-medium text-gray-800 tracking-wide whitespace-nowrap">
                    RICH FLAVORS
                  </span>
                </motion.div>

                {/* Item 2: Premium Beans */}
                <motion.div
                  className="flex items-center gap-4"
                  variants={iconItemVariants}
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300">
                    <Image src="/premium.svg" alt="100% Premium Beans" width={60} height={34} />
                  </div>
                  <span className="text-lg font-medium text-gray-800 tracking-wide whitespace-nowrap">
                    PREMIUM BEANS
                  </span>
                </motion.div>

                {/* Item 3: Plant-based Sugar */}
                <motion.div
                  className="flex items-center gap-4"
                  variants={iconItemVariants}
                >
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300">
                    <Image src="/sugarfree.svg" alt="Sugar Free" width={60} height={34} />
                  </div>
                  <span className="text-lg font-medium text-gray-800 tracking-wide whitespace-nowrap">
                    Natural Sweeteners
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* mobile icons */}
            <div className="flex flex-row lg:hidden w-full absolute left-0 right-0 bottom-0 gap-1 md:gap-10 justify-center -mb-10">
              {/* Item 1: RICH FLAVOR */}
              <div className="flex flex-col items-center">
                {/* Fixed-size wrapper for the icon and its text container */}
                <div className="flex flex-row items-center gap-0.5">
                  <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                    {/* The actual icon image */}
                    <Image src="/flavors.svg" alt="Rich Flavors" width={45} height={45} />
                  </div>
                  {/* Text container, using text-center for visual balance */}
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug">RICH<br />FLAVOR</span>
                </div>
              </div>

              {/* Item 2: 100% PREMIUM */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-0.5">
                  <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                    <Image src="/premium.svg" alt="100% Premium Coffee" width={45} height={45} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug">100%<br />PREMIUM</span>
                </div>
              </div>

              {/* Item 3: Plant-based Sugar */}
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-0.5">
                  <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                    <Image src="/sugarfree.svg" alt="Natural Sugar" width={45} height={45} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug">NATURAL<br />SWEETENERS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
