import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import forest from "/public/images/forests/forest_river_duotone.png";

export default function ContextSection() {
  return (
    <section
      id="intro"
      className="flex h-screen flex-col bg-brand-100 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <Image
          src={forest}
          alt=""
          sizes="100vw"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-full">
        <div className="flex h-full flex-col p-6">
          <h2 className="text-3xl font-medium tracking-tighter text-foreground dark:text-background sm:text-4xl md:text-5xl lg:text-6xl">
            Erosion in New Zealand Landscapes
          </h2>
          <article className="mt-auto flex flex-col">
            <Prose>
              <p className="text-balance text-base font-normal text-foreground dark:text-background">
                Forests on steep, erosion-prone land significantly reduce
                landslides and erosion compared to pastures due to their thick
                roots and leafy canopies. This root reinforcement effect and
                umbrella effect keep the soil dry and strong, preventing slips
                and erosion.
              </p>
              <p className="text-balance text-base font-normal text-foreground dark:text-background">
                However, plantation forests in New Zealand are clear-felled at
                maturity, typically around 28 years, creating a window of
                vulnerability for about six years until the new crop establishes
                itself. During this period, the risk of erosion increases, and
                landslides can move woody debris downslope.
              </p>
              <p className="text-balance text-base font-normal text-foreground dark:text-background">
                Effective management involves creating catchment management
                units (CMUs) to control the proportion of vulnerable areas and
                minimise sediment and debris entering rivers.
              </p>
            </Prose>
          </article>
        </div>
      </div>
    </section>
  );
}
