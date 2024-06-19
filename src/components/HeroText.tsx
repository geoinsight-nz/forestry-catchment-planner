export default function HeroText() {
  return (
    <>
      <h1 className="translate-y-[-1rem] animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        Future-Focused
        <br className="hidden md:block" /> Environmental Management
      </h1>
      <p className="mb-12 translate-y-[-1rem] animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        The Forestry Catchment Planner (FCP) is a web application designed to improve
        <br className="hidden md:block" /> environmental management within the
        forestry sector.
      </p>
    </>
  );
}
