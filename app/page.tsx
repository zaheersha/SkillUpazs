import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HorizontalProjectsScroller from "@/components/HorizontalProjectsScroller";
import PricingSection from "@/components/PricingSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactSection from "@/components/ContactSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <TechStackMarquee />
      <AboutSection />
      <ServicesSection />
      <HorizontalProjectsScroller />
      <TestimonialsSection />
      <PricingSection />
      <FAQAccordion />
      <CTASection />
      <ContactSection />
    </main>
  );
}
