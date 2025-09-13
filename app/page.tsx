import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import BestSelling from "@/components/sections/BestSeller";
import Testimonials from "@/components/sections/Testimonials";
// import CTASection from "@/components/sections/CTASection";
import Specials from "@/components/sections/Specials";
import Philosophy from "@/components/sections/Philosophy";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Specials />
      <Philosophy />
      <About />
      <BestSelling />
      <Testimonials />
      {/* <CTASection /> */}
    </main>
  );
}
