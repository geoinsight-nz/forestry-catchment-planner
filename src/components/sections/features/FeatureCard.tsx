/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import Image, { type StaticImageData } from "next/image";

type FeatureCardProps = {
  id: string;
  image: StaticImageData;
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
          placeholder="blur"
          className="h-full w-full rounded-sm object-contain"
          unoptimized
        />
      </figure>
      {/* <p className="pt-2 text-sm text-foreground">{caption}</p> */}
    </div>
  );
}
