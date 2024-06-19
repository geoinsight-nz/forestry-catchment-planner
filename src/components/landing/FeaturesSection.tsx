import { FeatureText } from "@/components/FeatureText";
import FeatureCard from "../FeatureCard";

const features = [
  {
    title: "Simulate and Analyse",
    body: "Users can view geographic data and simulate the effects of clear-felling on catchment areas, measured as Catchment Management Units.",
    id: "simulate",
    image: "/images/desktop_fcp.png",
  },
  {
    title: "Evolving Hazard Visualisation",
    body: "Understand the evolving hazards associated with forestry activities in different catchment areas.",
    id: "hazard",
    image: "/images/desktop_fcp.png",
  },
  {
    title: "Consistent Baseline Data",
    body: "See a consistent and accurate baseline of plantation stand age, used as a proxy for likely harvesting activity.",
    id: "data",
    image: "/images/desktop_fcp.png",
  },
  {
    title: "Visual Data Tools",
    body: "Utilise a time slider and heat mapping to highlight critical catchments and forested areas needing greater attention and better management focus.",
    id: "tools",
    image: "/images/desktop_fcp.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-background">
      <div className="flex w-full items-start gap-20 p-8">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureText
                  id={feature.id}
                  title={feature.title}
                  body={feature.body}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-sm bg-gray-100">
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
    </section>
  );
}
