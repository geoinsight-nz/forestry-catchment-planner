/* eslint-disable @next/next/no-img-element */

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="flex h-screen flex-col bg-brand-900 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <div className="p-6">
          <h1 className="text-balance py-6 text-3xl font-medium leading-none tracking-tighter text-inverted-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Transparent and Sustainable Forestry Planning
          </h1>
          <div className="flex flex-col gap-4 py-6">
            <p className="text-balance text-xl font-normal text-inverted-foreground dark:text-foreground">
              The Forestry Catchment Planner aims to create a transparent,
              cohesive system for better understanding intergenerational
              harvesting cycles on a catchment scale.
            </p>
            <p className="text-balance text-xl font-normal text-inverted-foreground dark:text-foreground">
              The tool provides comprehensive insights into forestry stand
              locations, recent harvests, and data on erosion susceptibility
              hazard for future harvesting schedules.
            </p>
            <p className="text-balance text-xl font-normal text-inverted-foreground dark:text-foreground">
              This enables effective environmental stewardship, improving water
              quality, promoting healthier ecosystems, and facilitating better
              holistic planning for future planting and harvesting.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full">
        <img
          src="/images/forests/forest_trees_duotone.png"
          alt=""
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
