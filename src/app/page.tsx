import HeroSection from "@/components/sections/hero/HeroSection";
import IntroSection from "@/components/sections/intro/IntroSection";
import RegionsSection from "@/components/sections/regions/RegionsSection";
import TeamSection from "@/components/sections/team/TeamSection";
import ContextSection from "../components/sections/context/ContextSection";
import FeaturesSection from "../components/sections/features/FeaturesSection";
import PartnersSection from "../components/sections/partners/PartnersSection";

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
