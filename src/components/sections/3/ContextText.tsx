import { Prose } from "@/components/mdx/Prose";
import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";

type Data = {
  heading: string;
  "paragraph-one": string;
  "paragraph-two": string;
  "paragraph-three": string;
};

export default async function ContextText() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/3",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }
  return (
    <>
      <header className="mb-14">
        <h2 className="text-balance text-xl font-medium text-brand-950 dark:text-foreground lg:text-3xl">
          {content?.heading}
        </h2>
      </header>
      <Prose className="mx-auto">
        <article>
          <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
            {content?.["paragraph-one"]}
          </p>
          <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
            {content?.["paragraph-two"]}
          </p>
          <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
            {content?.["paragraph-three"]}
          </p>
        </article>
      </Prose>
    </>
  );
}
