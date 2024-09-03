"use client";

import { Prose } from "@/components/mdx/Prose";
import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { type Feature } from "./FeaturesList";

type FeatureText = Omit<Feature, "image">;

export default function FeatureText({ id, heading, text }: FeatureText) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0% -50% 0%",
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <div ref={ref}>
      <Prose className="py-16">
        <h2
          className={cn(
            isInView ? "opacity-100" : "opacity-30",
            "text-balance text-xl font-medium text-brand-950 transition-colors dark:text-brand-50 lg:text-3xl",
          )}
        >
          {heading}
        </h2>
        <p
          className={cn(
            isInView ? "opacity-100" : "opacity-30",
            "pt-6 text-sm font-normal text-brand-950 transition-colors dark:text-brand-50 lg:text-base",
          )}
        >
          {text}
        </p>
      </Prose>
    </div>
  );
}
