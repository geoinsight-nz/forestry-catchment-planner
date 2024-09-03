import { Prose } from "@/components/mdx/Prose";
import { readJSONFile } from "@/utils/readJSONFile";
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
                {paragraph.text}
              </p>
            ) : paragraph.listItems ? (
              <ol key={index}>
                {paragraph.listItems.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-balance text-sm font-normal text-brand-950 dark:text-foreground md:text-sm xl:text-sm"
                  >
                    {item.subheading && (
                      <strong className="font-bold">{item.subheading}: </strong>
                    )}
                    {item.text}
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
