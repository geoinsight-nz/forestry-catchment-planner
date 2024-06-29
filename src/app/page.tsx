import HeroSection from "@/components/sections/hero/HeroSection";
import IntroSection from "@/components/sections/intro/IntroSection";
import RegionsSection from "@/components/sections/regions/RegionsSection";
import ScienceSection from "@/components/sections/science/ScienceSection";
import TeamSection from "@/components/sections/team/TeamSection";
import FeaturesSection from "../components/sections/features/FeaturesSection";
import PartnersSection from "../components/sections/partners/PartnersSection";

export default async function Page() {
  return (
    <main className="bg-background dark:bg-brand-950 overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      <ScienceSection />
      <FeaturesSection />
      <RegionsSection />
      <TeamSection />
      <PartnersSection />
    </main>
  );
}
