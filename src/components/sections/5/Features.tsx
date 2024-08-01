import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";
import FeaturesHeading from "./FeaturesHeading";
import FeaturesList from "./FeaturesList";

type Data = {
  heading: string;
  features: {
    title: string;
    body: string;
    id: string;
    image: string;
    caption: string;
  }[];
};

export default async function FeaturesSection() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/4",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }
  return (
    <section className="min-h-screen bg-background p-6 dark:bg-zinc-900">
      <FeaturesHeading heading={content?.heading} />
      <FeaturesList features={content?.features} />
    </section>
  );
}
