// import { Heart, BookOpen, Lightbulb } from "lucide-react"
import {ChevronRight} from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div
        className="relative h-80 bg-cover bg-center "
        style={{ backgroundImage: "url(/bannerz.webp)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center xl:items-start justify-center h-full text-white px-5 xl:px-26 text-center xl:text-left pt-30 lg:pt-20">
          <h1 className="text-5xl font-bold mb-4 font-body">
            About Us
          </h1>
          <div className="flex items-center text-sm text-white justify-center xl:justify-start">
            <span><Link className="hover:underline" href="/">Home</Link></span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-200">About Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image Gallery */}
          <div className="relative w-[80%] md:w-full h-[20rem] md:h-[32rem]">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg">
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <Image
                src="/about-page-section.webp"
                alt="about us "
                fill
                className="object-cover"
              />
            </div>

            {/* Smaller Overlay Image (bottom-right) */}
            <div className="absolute -bottom-15 md:-bottom-20 -right-20 md:-right-1 w-[calc(90%-1rem)] md:w-[calc(70%-4rem)] h-[75%] md:h-1/2 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/cafe.webp"
                alt="Overlay café counter"
                fill
                className="object-cover"
              />
            </div>
          </div>


          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-brand-secondary font-bold text-sm uppercase tracking-wide mb-2">ABOUT US</p>
              <h2 className="text-4xl font-bold mb-6 text-brand-primary font-body" >
                Influence Café
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Influence Café, coffee isn&apos;t just a drink—it&apos;s an opportunity. Located at the busy Central & Secor
                intersection in Toledo, OH, we wanted to create more than another café. Our founders envisioned a space
                where flavor and wellness meet, where every sip tells a story, and where learning feels as natural as
                enjoying your favorite brew.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our signature espresso creations to our zero-sugar desserts, we&apos;ve designed Influence Café for
                people who care about taste, health, and community. We believe that great food and drinks can be both
                indulgent and mindful.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed mb-4 italic">
                &quot;We started Influence Café to make wellness simple, delicious, and fun. Every cup is an invitation to
                learn, connect, and grow together. Through QR codes, events, and even quick questions at checkout, we
                make health education accessible—and enjoyable.&quot;
              </p>
              <div>
                <p className="text-brand-secondary font-semibold">THE INFLUENCE CAFÉ FOUNDERS</p>
                <p className="text-gray-400 text-sm">Owners/Operators</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch gap-6 mb-16">

          {/* Left: Mission (The Foundation) */}
          <div className="md:w-1/3 p-8 bg-white border-l-4 border-brand-secondary shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-brand-secondary mb-3">01. Mission</h3>
              <h4 className="text-xl font-semibold mb-3">Redefining Coffee</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              To redefine the coffee experience by blending cultural flavor with scientific knowledge, empowering our
              community to make healthier choices while enjoying every moment.
            </p>
          </div>

          {/* Center: Vision (The Overlapping Goal) - The Focal Point */}
          <div className="md:w-1/3 p-8 bg-[#f8f5ef]  text-gray-900 shadow-xl z-10 scale-105 transform -translate-y-2 md:translate-y-0">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-3">02. Vision</h3>
              <h4 className="text-2xl font-semibold mb-4">Toledo&apos;s Wellness Hub</h4>
              <p className="leading-relaxed font-medium">
                To become Toledo&apos;s hub for wellness-inspired coffee culture, and eventually a scalable concept that brings
                the joy of coffee and science to communities nationwide.
              </p>
            </div>
          </div>

          {/* Right: Why Science (The Catalyst) */}
          <div className="md:w-1/3 p-8 bg-white border-r-4 border-brand-secondary shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-brand-secondary mb-3 text-right">03. Science</h3>
              <h4 className="text-xl font-semibold mb-3 text-right">Simplify Wellness</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe wellness shouldn&apos;t be complicated. We simplify this by giving you easy,
              **science-backed facts** about caffeine, nutrition, and wellness.
            </p>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To redefine the coffee experience by blending cultural flavor with scientific knowledge, empowering our
              community to make healthier choices while enjoying every moment.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become Toledo&apos;s hub for wellness-inspired coffee culture, and eventually a scalable concept that brings
              the joy of coffee and science to communities nationwide.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Why Science?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe wellness shouldn&apos;t be complicated. At Influence Café, we simplify this by giving you easy,
              science-backed facts about caffeine, nutrition, and wellness.
            </p>
          </div>
        </div> */}


      </div>
    </section>
  )
}

export default AboutPage
