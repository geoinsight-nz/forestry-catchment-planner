import HeroSection from "@/components/sections/1/HeroSection";
import IntroSection from "@/components/sections/2/IntroSection";
import ScienceSection from "@/components/sections/3/ScienceSection";
import FeaturesSection from "@/components/sections/4/FeaturesSection";
import RegionsSection from "@/components/sections/5/RegionsSection";
import TeamSection from "@/components/sections/6/TeamSection";
import PartnersSection from "@/components/sections/7/PartnersSection";

export default async function Page() {
  return (
    <main className="bg-background dark:bg-brand-950">
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
