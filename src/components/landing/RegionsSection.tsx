export default function RegionsSection() {
  return (
    <section
      id="regions"
      className="flex h-screen flex-col bg-brand-900 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <div className="p-6">
          <h2 className="text-balance py-6 text-xl font-medium leading-none tracking-tighter text-inverted-foreground dark:text-inverted-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            The Forestry Catchment Planner initially focuses on five targeted
            regions: Te Tauihu (Tasman, Nelson, Marlborough), Te Matau-a-Māui
            (Hawkes Bay), and Tairāwhiti (Gisborne), with the goal of expanding
            deployment throughout Aotearoa.
          </h2>
          <div className="flex flex-col gap-4 py-6">
            <p className="text-balance text-xl font-normal text-inverted-foreground">
              This project will surface data and information that is currently
              inaccessible to many due to resource limitations, empowering the
              forestry sector to showcase progressive and proactive catchment
              planning with regulators, empower tangata whenua to protect
              cultural heritage, and encourage other land users to think
              holistically.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full max-w-[50%]">
        <img
          src="/images/nz_map_regions.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
