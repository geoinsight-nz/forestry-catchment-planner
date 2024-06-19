/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import Image from "next/image";

type FeatureCardProps = {
  id: string;
  image: string;
    caption: string;
};

export default function FeatureCard({ id, image, caption }: FeatureCardProps) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-sm transition-opacity",
        inViewFeature === id ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <figure className="relative flex h-full w-full flex-col gap-4">
        <Image
          src={image}
          alt="Forestry Catchment Planner feature"
          fill
          className="h-full w-full rounded-[inherit] object-cover"
          unoptimized
        />
      </figure>
      <p className="pt-2 text-sm text-black">{caption}</p>
    </div>
  );
}
