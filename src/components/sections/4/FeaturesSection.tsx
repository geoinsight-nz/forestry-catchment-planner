import FeaturesHeading from "./FeaturesHeading";
// import { FeaturesList } from "./FeaturesList";

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-background p-6 dark:bg-zinc-900">
      <FeaturesHeading />
      {/* <FeaturesList features={features.features} /> */}
    </section>
  );
}
