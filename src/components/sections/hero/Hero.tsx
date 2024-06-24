"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div
      ref={ref}
      className="relative mt-[6rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50"
    >
      <div
        className={cn(
          inView ? "before:animate-image-glow" : "",
          "rounded-xl bg-background bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0",
        )}
      >
        <div className="mx-auto h-full max-w-4xl">
          <img
            src="/images/mockups/desktop_fcp.png"
            alt="FCP"
            className="relative hidden h-full w-full rounded-[inherit] object-contain dark:block"
          />
          <img
            src="/images/mockups/desktop_fcp.png"
            alt="FCP"
            className="relative block h-full w-full rounded-[inherit] object-contain dark:hidden"
          />
        </div>
      </div>
    </div>
  );
}
