"use client";

import DynamicImage from "@/components/shared/DynamicImage";
import { Fragment } from "react";
import FeatureCard from "./FeatureCard";
import { FeatureText } from "./FeatureText";

type Feature = {
  title: string;
  body: string;
  id: string;
  image: string;
  caption: string;
};

export function FeaturesList({ features }: { features: Feature[] }) {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="flex w-full flex-col gap-32 lg:pb-[50vh] lg:pt-[30vh]">
        <ul>
          {features.map((feature) => (
            <Fragment key={feature.id}>
              <figure className="relative flex h-[56vw] w-auto flex-col gap-4 lg:hidden">
                <DynamicImage
                  src={feature.image}
                  alt="Forestry Catchment Planner feature"
                  fill
                  className="h-full w-auto rounded-sm object-contain"
                />
              </figure>
              <li key={feature.id}>
                <FeatureText
                  id={feature.id}
                  title={feature.title}
                  body={feature.body}
                />
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="hidden h-screen w-full items-center lg:sticky lg:top-0 lg:flex">
        <div className="relative aspect-square w-full rounded-sm">
          {features.map((feature) => (
            <FeatureCard
              id={feature.id}
              key={feature.id}
              image={feature.image}
              caption={feature.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
