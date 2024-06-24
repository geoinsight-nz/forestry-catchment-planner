/* eslint-disable @next/next/no-img-element */

import VersionBadge from "@/components/icons/VersionBadge";
import Hero from "./Hero";
import HeroText from "./HeroText";

export default async function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mx-auto mt-24 max-w-[80rem] px-6 pb-16 text-center md:px-8"
    >
      <VersionBadge />
      <HeroText />
      <Hero />
    </section>
  );
}
