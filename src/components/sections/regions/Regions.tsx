import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import regions from "/public/images/visualisations/nz_regions_dark.png";

export default function Regions() {
  return (
    <section id="intro" className="flex items-center justify-center">
      <div className="mx-6 grid max-w-[32rem] grid-cols-1 rounded-sm bg-brand-900 dark:bg-brand-700 md:max-w-[68rem] md:grid-cols-2">
        <div className="flex aspect-auto h-fit flex-col justify-center px-6 py-6 md:aspect-square md:h-full md:py-0">
          <header className="mb-6">
            <h2 className="text-balance text-xl font-medium text-primary-foreground dark:text-foreground lg:text-3xl">
              Regions
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                The Forestry Catchment Planner initially focuses on five
                targeted regions: Te Tauihu (Tasman, Nelson, Marlborough), Te
                Matau-a-Māui (Hawkes Bay), and Tairāwhiti (Gisborne), with the
                goal of expanding deployment throughout Aotearoa.
              </p>
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                This project will surface data and information that is currently
                inaccessible to many due to resource limitations, empowering the
                forestry sector to showcase progressive and proactive catchment
                planning with regulators, empower tangata whenua to protect
                cultural heritage, and encourage other land users to think
                holistically.
              </p>
            </Prose>
          </article>
        </div>
        <div className="relative aspect-square h-full">
          <Image
            src={regions}
            alt=""
            fill
            sizes="100vw"
            className="h-full dark:bg-brand-800 bg-brand-800 w-auto rounded-sm object-contain p-12"
          />
        </div>
      </div>
    </section>
  );
}
