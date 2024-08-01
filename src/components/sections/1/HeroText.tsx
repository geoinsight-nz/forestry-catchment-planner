import { Prose } from "@/components/mdx/Prose";
import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";

type Data = { heading?: string; text?: string };

export default async function HeroText() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/1",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mx-auto translate-y-[-1rem] animate-fade-in text-balance py-6 text-5xl font-medium text-brand-950 opacity-0 [--animation-delay:200ms] dark:text-brand-50 sm:text-6xl md:text-7xl lg:text-8xl">
        {content.heading}
      </h1>
      <Prose className="mx-auto">
        <p className="translate-y-[-1rem] animate-fade-in text-balance text-lg text-brand-950 opacity-0 [--animation-delay:400ms] dark:text-secondary-foreground">
          {content.text}
        </p>
      </Prose>
    </div>
  );
}
