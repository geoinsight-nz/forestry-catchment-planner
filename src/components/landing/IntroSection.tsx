/* eslint-disable @next/next/no-img-element */

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="flex h-screen flex-col bg-brand-900 *:basis-full sm:flex-row"
    >
      <div className="h-full">
        <div className="p-6">
          <h1 className="text-inverted-foreground dark:text-inverted-foreground text-balance py-6 text-3xl font-medium leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transparent and Sustainable Forestry Planning
          </h1>
          <p className="text-inverted-foreground text-balance py-6 font-normal">
            The Forestry Catchment Planner aims to create a transparent,
            cohesive system for better understanding intergenerational
            harvesting cycles on a catchment scale. The tool provides
            comprehensive insights into forestry stand locations, recent
            harvests, and data on erosion susceptibility hazard for future
            harvesting schedules. This enables effective environmental
            stewardship, improving water quality, promoting healthier
            ecosystems, and facilitating better holistic planning for future
            planting and harvesting.
          </p>
        </div>
      </div>
      <div className="h-full">
        <img
          src="/images/forest_trees_duotone.png"
          alt=""
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
}
