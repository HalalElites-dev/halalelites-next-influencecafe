'use client';
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const leftVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 1, 1] as [number, number, number, number], } },
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const iconItemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  useEffect(() => {
    if (imageLoaded) {
      // Subtle scale animation AFTER image loads
      animate(scale, [1, 1.02, 1], {
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1],
      });
    }
  }, [imageLoaded, scale]);

  return (
    <section id="home" className="bg-background">
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
              <Link href="/contact" className="flex items-center gap-2 py-6 px-8">
                Visit Us
              </Link>
            </Button>
            <Button size="lg" variant={"link"} className="text-black px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Section - LCP-optimized with post-load animation */}
        <div className="relative">
          <div className="relative w-full md:h-[600px] flex items-center justify-center">
            {/* Coffee Cup - Renders immediately, animates after load */}
            <motion.div 
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]"
              style={{ scale, opacity }}
            >
              <Image
                src="/text2.webp"
                alt="Influence Coffee Cup"
                fill
                className="object-contain xl:mr-15 mx-auto"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>

            {/* Desktop / Laptop Floating Icons */}
            <motion.div
              className="hidden lg:block absolute inset-0"
              initial="hidden"
              animate={imageLoaded ? "visible" : "hidden"}
              variants={iconContainerVariants}
            >
              <div className="absolute top-[20%] right-[5%] flex flex-col items-start space-y-8">
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
            <div className="flex flex-row lg:hidden w-full absolute left-0 right-0 bottom-0 gap-0.5 md:gap-10 justify-center -mb-10">
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-0.5">
                  <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                    <Image src="/flavors.svg" alt="Rich Flavors" width={45} height={45} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug">RICH<br />FLAVOR</span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-0.5">
                  <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                    <Image src="/premium.svg" alt="100% Premium Coffee" width={45} height={45} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug">100%<br />PREMIUM</span>
                </div>
              </div>

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
        </div>
      </div>
    </section>
  )
}

export default Hero