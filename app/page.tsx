import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import BestSelling from "@/components/sections/BestSeller";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Specials from "@/components/sections/Specials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <About />
      <BestSelling />
      <Testimonials />
      <CTASection />
    </main>
  );
}
