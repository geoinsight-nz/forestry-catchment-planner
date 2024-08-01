"use client";

import DynamicImage from "@/components/shared/DynamicImage";
import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";

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
      <figure className="relative flex h-full w-full flex-col gap-4">
        <DynamicImage
          src={image}
          alt="Forestry Catchment Planner feature"
          fill
          className="h-full w-full rounded-sm object-contain"
        />
      </figure>
    </div>
  );
}
