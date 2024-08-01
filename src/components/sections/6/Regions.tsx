import { Prose } from "@/components/mdx/Prose";
import DynamicImage from "@/components/shared/DynamicImage";
import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";

type Data = {
  heading: string;
  text: string;
  regions: string;
};

export default async function Regions() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/6",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }
  return (
    <div className="flex h-full flex-col gap-y-24 bg-brand-700 py-24 dark:bg-brand-950 sm:gap-y-48">
      <section id="intro" className="flex items-center justify-center">
        <div className="mx-6 grid max-w-[32rem] grid-cols-1 rounded-sm bg-brand-900 dark:bg-brand-700 md:max-w-[68rem] md:grid-cols-2">
          <div className="flex aspect-auto h-fit flex-col justify-center px-6 py-6 md:aspect-square md:h-full md:py-0">
            <header className="mb-6">
              <h2 className="text-balance text-xl font-medium text-primary-foreground dark:text-foreground lg:text-3xl">
                {content?.heading}
              </h2>
            </header>
            <article className="flex flex-col">
              <Prose className="">
                <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                  {content?.text}
                </p>
              </Prose>
            </article>
          </div>
          <div className="relative aspect-square h-full">
            <DynamicImage
              src={content?.regions}
              alt=""
              fill
              sizes="100vw"
              className="h-full w-auto rounded-sm bg-brand-800 object-contain p-12 dark:bg-brand-800"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
