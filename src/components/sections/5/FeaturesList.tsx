import F1 from "./F1";
import F2 from "./F2";
import F3 from "./F3";
import F4 from "./F4";
import FeatureCard from "./FeatureCard";

type Feature = {
  title: string;
  body: string;
  id: string;
  image: string;
  caption: string;
};

export function FeaturesList({ features }: { features: Feature[] }) {
  return (
    <div className="flex w-full items-start gap-20">
      <div className="flex w-full flex-col gap-32 lg:pb-[50vh] lg:pt-[30vh]">
        <ul>
          <F1 id={features[0]!.id} image={features[0]!.image} />
          <F2 id={features[1]!.id} image={features[1]!.image} />
          <F3 id={features[2]!.id} image={features[2]!.image} />
          <F4 id={features[3]!.id} image={features[3]!.image} />
        </ul>
      </div>
      <div className="hidden h-screen w-full items-center lg:sticky lg:top-0 lg:flex">
        <div className="relative aspect-square w-full rounded-sm">
          {features.map((feature) => (
            <FeatureCard
              id={feature.id}
              key={feature.id}
              image={feature.image}
              caption={feature.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
