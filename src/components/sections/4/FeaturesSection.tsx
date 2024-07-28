import FeaturesHeading from "./FeaturesHeading";
import { FeaturesList } from "./FeaturesList";
import features from '@/app/_mdx-content/sections/4/list/list.json';

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-background p-6 dark:bg-zinc-900">
      <FeaturesHeading />
      <FeaturesList features={features.features} />
    </section>
  );
}
