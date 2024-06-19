/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import Image from "next/image";

type FeatureCardProps = {
  id: string;
  image: string;
};

export default function FeatureCard({ id, image }: FeatureCardProps) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-sm transition-opacity",
        inViewFeature === id ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt="Forestry Catchment Planner feature"
          fill
          className="relative h-full w-full rounded-[inherit] object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
