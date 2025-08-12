import { HeroSection } from "@/components/sections/hero-section";
import { IntroTextSection } from "@/components/sections/intro-text-section";
import ServicesSection from "@/components/sections/services-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { UpgradeSection } from "@/components/sections/upgrade-section";
import { AttributionsSection } from "@/components/sections/attributions-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroTextSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UpgradeSection />
      <AttributionsSection />
      <CTASection />
    </div>
  );
}
