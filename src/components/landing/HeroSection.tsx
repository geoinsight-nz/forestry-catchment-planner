/* eslint-disable @next/next/no-img-element */
"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import VersionBadge from "@/components/VersionBadge";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
      <VersionBadge />
      <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        Future-Focused
        <br className="hidden md:block" /> Environmental Management
      </h1>
      <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        The Forestry Catchment Planner (FCP) is a web app designed to improve
        <br className="hidden md:block" /> environmental management within the
        forestry sector.
      </p>
      <div
        ref={ref}
        className="relative mt-6rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50"
      >
        <div
          className={cn(
            inView ? "before:animate-image-glow" : "",
            "rounded-xl bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0",
          )}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />

          <div className="h-full max-w-4xl mx-auto">
            <img
              src="/images/desktop_fcp.png"
              alt="Hero Image"
              className="relative hidden h-full w-full rounded-[inherit] object-contain dark:block"
            />
            <img
              src="/images/desktop_fcp.png"
              alt="Hero Image"
              className="relative block h-full w-full rounded-[inherit] object-contain dark:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
