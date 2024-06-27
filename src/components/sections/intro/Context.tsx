import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import forest from "/public/images/forests/forest_river_duotone.png";

export default function Context() {
  return (
    <section id="context" className="flex items-center justify-center">
      <div className="mx-6 grid max-w-[32rem] grid-cols-1 rounded-sm bg-brand-900 dark:bg-brand-700 md:max-w-[68rem] md:grid-cols-2">
        <div className="flex aspect-auto h-fit flex-col justify-center px-6 py-6 md:aspect-square md:h-full md:py-0">
          <header className="mb-6">
            <h2 className="text-balance text-xl font-medium text-brand-50 dark:text-brand-50 lg:text-3xl">
              Erosion in New Zealand Landscapes
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-brand-50 dark:text-brand-50 lg:text-base">
                Forests on steep, erosion-prone land significantly reduce
                landslides and erosion compared to pastures due to their thick
                roots and leafy canopies. This root reinforcement effect and
                umbrella effect keep the soil dry and strong, preventing slips
                and erosion.
              </p>
              <p className="text-balance text-sm font-normal text-brand-50 dark:text-brand-50 lg:text-base">
                However, plantation forests in New Zealand are clear-felled at
                maturity, typically around 28 years, creating a window of
                vulnerability for about six years until the new crop establishes
                itself. During this period, the risk of erosion increases, and
                landslides can move woody debris downslope.
              </p>
              <p className="text-balance text-sm font-normal text-brand-50 dark:text-brand-50 lg:text-base">
                Effective management involves creating catchment management
                units (CMUs) to control the proportion of vulnerable areas and
                minimise sediment and debris entering rivers.
              </p>
            </Prose>
          </article>
        </div>
        <div className="relative aspect-square h-full">
          <Image
            src={forest}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-auto rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
