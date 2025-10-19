'use client';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/text2.webp";

import { Variants } from "framer-motion";

const leftVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.42, 0, 1, 1] },
  },
};

const iconContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.6, staggerChildren: 0.25 },
  },
};

const iconItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const Hero = () => {
  return (
    <section id="home" className="bg-background lg:h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-20 mx-auto max-w-7xl xl:max-w-[1800px] py-32 md:py-30 xl:py-38">

        {/* Left section */}
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
            <Button
              size="lg"
              variant="link"
              className="text-black px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right section */}
        <div className="relative">
          <div className="relative w-full md:h-[600px] flex items-center justify-center">

            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]"
            >
              <Image
                src={heroImage}
                alt="Influence Coffee Cup"
                fill
                placeholder="blur"
                priority
                fetchPriority="high"
                className="object-contain xl:mr-15 mx-auto"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 45vw"
                quality={85}
              />
            </motion.div>

            <motion.div
              className="hidden lg:block absolute inset-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconContainerVariants}
            >
              <div className="absolute top-[20%] right-[5%] flex flex-col items-start space-y-8">
                {[
                  { src: "/flavors.svg", text: "RICH FLAVORS" },
                  { src: "/premium.svg", text: "PREMIUM BEANS" },
                  { src: "/sugarfree.svg", text: "Natural Sweeteners" },
                ].map((icon, idx) => (
                  <motion.div key={idx} className="flex items-center gap-4" variants={iconItemVariants}>
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-300">
                      <Image 
                        src={icon.src} 
                        alt={icon.text} 
                        width={60} 
                        height={34}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-lg font-medium text-gray-800 tracking-wide whitespace-nowrap">
                      {icon.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile icons */}
            <div className="flex flex-row lg:hidden w-full absolute left-0 right-0 bottom-0 gap-1 md:gap-10 justify-center -mb-10">
              {[
                { src: "/flavors.svg", label: "RICH\nFLAVOR" },
                { src: "/premium.svg", label: "100%\nPREMIUM" },
                { src: "/sugarfree.svg", label: "NATURAL\nSWEETENERS" },
              ].map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="flex flex-row items-center gap-0.5">
                    <div className="w-[45px] h-[45px] flex-shrink-0 flex items-center justify-center">
                      <Image 
                        src={icon.src} 
                        alt={icon.label} 
                        width={45} 
                        height={45}
                        loading="lazy"
                        
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-800 text-center leading-snug whitespace-pre-line">
                      {icon.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;