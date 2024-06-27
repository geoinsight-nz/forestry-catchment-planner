/* eslint-disable @next/next/no-img-element */

import VersionBadge from "@/components/icons/VersionBadge";
import Hero from "./Hero";
import HeroText from "./HeroText";

export default async function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-full w-full mx-auto mt-24 max-w-[80rem] px-6 mb-24 text-center"
    >
      <VersionBadge />
      <HeroText />
      <Hero />
    </section>
  );
}
