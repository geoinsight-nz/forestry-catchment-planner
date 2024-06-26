import { Prose } from "@/components/mdx/Prose";
import Image from "next/image";
import regions from "/public/images/visualisations/nz_regions_dark.png";

export default function RegionsSection() {
  return (
    <section
      id="regions"
      className="flex h-screen flex-col bg-brand-900 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <div className="flex h-full flex-col p-6">
          <h1 className="text-3xl font-medium leading-none tracking-tighter text-inverted-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Regions
          </h1>
          <div className="mt-auto flex flex-col">
            <Prose>
              <p className="text-balance text-base font-normal text-inverted-foreground dark:text-foreground">
                The Forestry Catchment Planner initially focuses on five
                targeted regions: Te Tauihu (Tasman, Nelson, Marlborough), Te
                Matau-a-Māui (Hawkes Bay), and Tairāwhiti (Gisborne), with the
                goal of expanding deployment throughout Aotearoa.
              </p>
              <p className="text-balance text-base font-normal text-inverted-foreground dark:text-foreground">
                This project will surface data and information that is currently
                inaccessible to many due to resource limitations, empowering the
                forestry sector to showcase progressive and proactive catchment
                planning with regulators, empower tangata whenua to protect
                cultural heritage, and encourage other land users to think
                holistically.
              </p>
            </Prose>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full max-w-[50%] bg-brand-100 p-20">
        <Image
          src={regions}
          alt="Studied regions."
          sizes="50vw"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
