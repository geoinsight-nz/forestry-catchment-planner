import { readJSONFile } from "@/utils/readJSONFile";
import {
  ApproximateEquals,
  MapPin,
  Plant,
  Presentation,
  ShieldWarning,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import path from "path";
import Question from "./Question";

type Data = {
  heading: string;
  features: {
    id: string;
    heading: string;
    text: string;
    image: string;
    caption?: string;
  }[];
};

export default async function Science() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/5",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }
  return (
    <section
      id="science"
      className="h-full min-h-screen w-full border-t border-brand-900 bg-brand-900 p-6 dark:border-brand-500 dark:bg-brand-950"
    >
      <header className="mb-[80px]">
        <h2 className="text-balance text-3xl font-medium text-brand-50 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl">
          {content?.heading}
        </h2>
      </header>
      <div className="grid h-full max-w-full grid-cols-1 place-items-center gap-x-[8vw] gap-y-[2vw] md:grid-cols-2 lg:pl-[24vw]">
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <MapPin size={48} className="text-brand-50 dark:text-brand-50" />
          </div>
          {content?.features[0] && <Question question={content?.features[0]} />}
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <Presentation
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          {content?.features[1] && <Question question={content?.features[1]} />}
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <ShieldWarning
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
            <ApproximateEquals
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          {content?.features[2] && <Question question={content?.features[2]} />}
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <Plant size={48} className="text-brand-50 dark:text-brand-50" />
          </div>
          {content?.features[3] && <Question question={content?.features[3]} />}
        </aside>
        <div className="flex h-[22rem]  w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <UsersThree
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          {content?.features[4] && <Question question={content?.features[4]} />}
        </div>
      </div>
    </section>
  );
}
