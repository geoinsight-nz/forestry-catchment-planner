import { Prose } from "@/components/mdx/Prose";
import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";

type Paragraph = {
  text: string;
};

type Data = {
  heading?: string;
  paragraphs?: Paragraph[];
};

export default async function ApplicationText() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/2",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) return null;

  return (
    <>
      <header className="mb-14">
        <h2 className="mb-14 text-balance text-xl font-medium text-brand-950 dark:text-foreground lg:text-3xl">
          {content?.heading}
        </h2>
      </header>
      <Prose>
        <article className="h-full text-sm font-normal">
          {content.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="text-balance text-sm font-normal text-brand-950 dark:text-foreground md:text-sm xl:text-sm"
            >
              <span key={index}>
                {paragraph.text
                  ?.split(/(\[.*?\]\(.*?\))/)
                  .map((part, index) => {
                    const match = part.match(/\[(.*?)\]\((.*?)\)/);
                    if (match) {
                      const [, linkText, url] = match;
                      return (
                        <a
                          key={index}
                          href={url}
                          className="decoration-1 underline-offset-4 hover:underline"
                        >
                          {linkText}
                        </a>
                      );
                    }
                    return part;
                  })}
              </span>
            </p>
          ))}
        </article>
      </Prose>
    </>
  );
}
