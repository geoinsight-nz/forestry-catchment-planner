import HeroSection from "@/components/sections/1/HeroSection";
import JointIntroSections from "@/components/sections/2/JointIntroSections";
import ScienceSection from "@/components/sections/4/ScienceSection";
import FeaturesSection from "@/components/sections/5/FeaturesSection";
import RegionsSection from "@/components/sections/6/RegionsSection";
import TeamSection from "@/components/sections/7/TeamSection";
import PartnersSection from "@/components/sections/8/PartnersSection";

export default async function Page() {
  return (
    <main className="bg-background dark:bg-brand-950">
      <HeroSection />
      <JointIntroSections />
      <ScienceSection />
      <FeaturesSection />
      <RegionsSection />
      <TeamSection />
      <PartnersSection />
    </main>
  );
}
