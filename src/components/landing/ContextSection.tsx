/* eslint-disable @next/next/no-img-element */

export default function ContextSection() {
  return (
    <section
      id="intro"
      className="flex h-screen flex-col bg-brand-100 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <img
          src="/images/forests/forest_river_duotone.png"
          alt=""
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-full">
        <div className="p-6">
          <h1 className="py-6 text-3xl font-medium leading-none tracking-tighter text-foreground dark:text-inverted-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Erosion in New Zealand Landscapes
          </h1>
          <div className="flex flex-col gap-4 py-6">
            <p className="text-balance text-xl font-normal text-foreground dark:text-inverted-foreground">
              Forests on steep, erosion-prone land significantly reduce
              landslides and erosion compared to pastures due to their thick
              roots and leafy canopies. This root reinforcement effect and
              umbrella effect keep the soil dry and strong, preventing slips and
              erosion.
            </p>
            <p className="text-balance text-xl font-normal text-foreground dark:text-inverted-foreground">
              However, plantation forests in New Zealand are clear-felled at
              maturity, typically around 28 years, creating a window of
              vulnerability for about six years until the new crop establishes
              itself. During this period, the risk of erosion increases, and
              landslides can move woody debris downslope.
            </p>
            <p className="text-balance text-xl font-normal text-foreground dark:text-inverted-foreground">
              Effective management involves creating catchment management units
              (CMUs) to control the proportion of vulnerable areas and minimise
              sediment and debris entering rivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
