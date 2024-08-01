import FeatureCard from "./FeatureCard";
import FeatureText from "./FeatureText";

type Feature = {
  title: string;
  body: string;
  id: string;
  image: string;
};

export default function FeaturesList({ features }: { features: Feature[] }) {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="flex w-full flex-col gap-32 lg:pb-[50vh] lg:pt-[30vh]">
        <ul>
          {features.map((feature) => (
            <FeatureText
              id={feature.id}
              key={feature.id}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </ul>
      </div>
      <div className="hidden h-screen w-full items-center lg:sticky lg:top-0 lg:flex">
        <div className="relative aspect-square w-full rounded-sm">
          {features.map((feature) => (
            <FeatureCard
              id={feature.id}
              key={feature.id}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
