import Image from "next-export-optimize-images/image";
import { type StaticImageData } from "next/image";
import { Prose } from "../mdx/Prose";

export default function SplitContainer({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: StaticImageData;
}) {
  return (
    <section id="intro" className="flex items-center justify-center">
      <div className="grid max-w-[68rem] grid-cols-1 rounded-sm bg-brand-700 dark:bg-brand-700 md:grid-cols-2">
        <div className="flex aspect-square h-full flex-col justify-center px-6">
          <header className="mb-6">
            <h2 className="text-balance text-xl font-medium text-primary-foreground dark:text-foreground lg:text-3xl">
              {title}
            </h2>
          </header>
          <article className="flex flex-col">
            <Prose className="">
              <p className="text-balance text-sm font-normal text-primary-foreground dark:text-foreground lg:text-base">
                {body}
              </p>
            </Prose>
          </article>
        </div>
        <div className="relative aspect-square h-full">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-auto rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
