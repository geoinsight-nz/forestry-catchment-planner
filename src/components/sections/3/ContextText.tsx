import { Prose } from "@/components/mdx/Prose";
import { readJSONFile } from "@/utils/readJSONFile";
import { renderMarkdownHeadingLink } from "@/utils/renderMarkdownHeadingLink";
import path from "path";

type Paragraph = {
  text?: string;
  listItems?: {
    subheading?: string;
    text?: string;
  }[];
};

type Data = {
  heading?: string;
  paragraphs?: Paragraph[];
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
      <Prose>
        <article className="h-full">
          {content.paragraphs?.map((paragraph, index) =>
            paragraph.text ? (
              <p
                key={index}
                className="text-balance text-sm font-normal text-brand-950 dark:text-foreground md:text-sm xl:text-sm"
              >
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
              </p>
            ) : paragraph.listItems ? (
              <ol key={index}>
                {paragraph.listItems.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-balance text-sm font-normal text-brand-950 dark:text-foreground md:text-sm xl:text-sm"
                  >
                    {item.subheading && (
                      <span className="font-bold">
                        {renderMarkdownHeadingLink(item.subheading)}:{" "}
                      </span>
                    )}
                    {item.text?.split(/(\[.*?\]\(.*?\))/).map((part, index) => {
                      const match = part.match(/\[(.*?)\]\((.*?)\)/);
                      if (match) {
                        const [, linkText, url] = match;
                        return (
                          <a
                            key={index}
                            href={url}
                            target="_blank"
                            className="decoration-1 underline-offset-4 hover:underline"
                          >
                            {linkText}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </li>
                ))}
              </ol>
            ) : null,
          )}
        </article>
      </Prose>
    </>
  );
}
