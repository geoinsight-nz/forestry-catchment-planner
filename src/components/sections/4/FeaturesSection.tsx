import { FeatureText } from "@/components/sections/4/FeatureText";
import DynamicImage from "@/components/shared/DynamicImage";
import { Fragment } from "react";
import FeatureCard from "./FeatureCard";
import macVisualise from "/public/images/mockups/mac_pro_3.png";
import macBaseline from "/public/images/mockups/mac_pro_4.png";
import macTools from "/public/images/mockups/mac_pro_5.png";
import macSimulate from "/public/images/mockups/mac_pro_6.png";

const features = [
  {
    title: "Simulate and Analyse",
    body: "View geographic data and simulate the effects of clearfelling on catchment areas, measured as Catchment Management Units.",
    id: "simulate",
    image: macSimulate,
    caption: "Erosion susceptibility.",
  },
  {
    title: "Evolving Hazard Visualisation",
    body: "Understand the hazards forecast for different catchment areas, such as landslide susceptibility and Melton Ratio.",
    id: "hazard",
    image: macVisualise,
    caption: "Landslide susceptibility.",
  },
  {
    title: "Consistent Baseline Data",
    body: "Work with a consistent and accurate baseline of plantation stand age, used as a proxy for likely harvesting activity.",
    id: "data",
    image: macBaseline,
    caption: "Hillslope units.",
  },
  {
    title: "Visual Data Tools",
    body: "Utilise a time slider and highlight catchments within the window of vulnerability during a given period to identify forested areas needing attention and management focus.",
    id: "tools",
    image: macTools,
    caption: "Melton ratios.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-background dark:bg-zinc-900">
      <div className="flex w-full items-start gap-20 p-8">
        <div className="flex w-full flex-col gap-32 lg:pb-[50vh]">
          <h2 className="text-3xl font-medium text-brand-950 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Visualising Forestry Harvesting Cycles
          </h2>
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
    </section>
  );
}
