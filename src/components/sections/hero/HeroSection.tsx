/* eslint-disable @next/next/no-img-element */

import VersionBadge from "@/components/icons/VersionBadge";
import Hero from "./Hero";
import HeroText from "./HeroText";

export default async function HeroSection() {
  return (
    <section id="hero" className="relative h-full w-full px-6 text-center">
      <div className="mx-auto mb-24 mt-24 max-w-[80rem]">
        <VersionBadge />
        <HeroText />
        <Hero />
      </div>
    </section>
  );
}
