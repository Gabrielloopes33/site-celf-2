import { HeroSection } from "@/components/sections/hero-section";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
  <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UpgradeSection />
      <AttributionsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}