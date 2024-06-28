import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import forest from "/public/images/forests/forest_river_duotone.png";

export default function Context() {
  return (
    <section id="context" className="flex items-center justify-center">
      <div className="grid h-screen grid-cols-1 bg-background dark:bg-brand-950 md:grid-cols-2">
        <div className="flex h-fit flex-col justify-start px-6 py-6 md:h-full md:px-12 md:py-14">
          <header className="mb-14">
            <h2 className="text-balance text-xl font-medium text-brand-950 dark:text-foreground lg:text-3xl">
              Erosion in New Zealand Landscapes
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
                Forests on steep, erosion-prone land significantly reduce
                landslides and erosion compared to pastures due to their thick
                roots and leafy canopies. This root reinforcement effect and
                umbrella effect keep the soil dry and strong, preventing slips
                and erosion.
              </p>
              <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
                However, plantation forests in New Zealand are clear-felled at
                maturity, typically around 28 years, creating a window of
                vulnerability for about six years until the new crop establishes
                itself. During this period, the risk of erosion increases, and
                landslides can move woody debris downslope.
              </p>
            </Prose>
          </article>
        </div>
        <div className="relative h-full w-full">
          <Image
            src={forest}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
