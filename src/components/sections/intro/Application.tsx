import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import trees from "/public/images/forests/forest_trees_duotone.png";

export default function Application() {
  return (
    <section id="intro" className="flex items-center justify-center">
      <div className="mx-6 grid max-w-[32rem] grid-cols-1 rounded-sm bg-brand-900 dark:bg-brand-700 md:max-w-[68rem] md:grid-cols-2">
        <div className="flex aspect-auto h-fit flex-col justify-center px-6 py-6 md:aspect-square md:h-full md:py-0">
          <header className="mb-6">
            <h2 className="text-balance text-xl font-medium text-primary-foreground dark:text-foreground lg:text-3xl">
              Transparent and Sustainable Forestry Planning
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                The Forestry Catchment Planner aims to create a transparent,
                cohesive system for better understanding intergenerational
                harvesting cycles on a catchment scale.
              </p>
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                The tool provides comprehensive insights into forestry stand
                locations, recent harvests, and data on erosion susceptibility
                hazard for future harvesting schedules.
              </p>
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                This enables effective environmental stewardship, improving
                water quality, promoting healthier ecosystems, and facilitating
                better holistic planning for future planting and harvesting.
              </p>
            </Prose>
          </article>
        </div>
        <div className="relative aspect-square h-full">
          <Image
            src={trees}
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
