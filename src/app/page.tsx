import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import RegionsSection from "@/components/landing/RegionsSection";
import TeamSection from "@/components/landing/TeamSection";
import ContextSection from "../components/landing/ContextSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PartnersSection from "../components/landing/PartnersSection";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ContextSection />
      <FeaturesSection />
      <RegionsSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
}
