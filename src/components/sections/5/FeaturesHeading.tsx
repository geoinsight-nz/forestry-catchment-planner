export default function FeaturesHeading({ heading }: { heading: string }) {
  return (
    <header className="mb-[80px]">
      <h2 className="text-balance text-3xl font-medium text-brand-50 dark:text-brand-50 sm:max-w-[50vw] sm:text-4xl md:text-5xl lg:text-6xl">
        {heading}
      </h2>
    </header>
  );
}
