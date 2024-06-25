/* eslint-disable @next/next/no-img-element */

import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import trees from "/public/images/forests/forest_trees_duotone.png";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="flex h-screen flex-col bg-brand-900 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <div className="flex h-full flex-col p-6">
          <h2 className="text-balance text-3xl font-medium tracking-tighter text-inverted-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Transparent and Sustainable Forestry Planning
          </h2>
          <div className="mt-auto flex flex-col">
            <Prose>
              <p className="text-balance text-base font-normal text-inverted-foreground dark:text-foreground">
                The Forestry Catchment Planner aims to create a transparent,
                cohesive system for better understanding intergenerational
                harvesting cycles on a catchment scale.
              </p>
              <p className="text-balance text-base font-normal text-inverted-foreground dark:text-foreground">
                The tool provides comprehensive insights into forestry stand
                locations, recent harvests, and data on erosion susceptibility
                hazard for future harvesting schedules.
              </p>
              <p className="text-balance text-base font-normal text-inverted-foreground dark:text-foreground">
                This enables effective environmental stewardship, improving
                water quality, promoting healthier ecosystems, and facilitating
                better holistic planning for future planting and harvesting.
              </p>
            </Prose>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <Image
          src={trees}
          alt=""
          sizes="100vw"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
