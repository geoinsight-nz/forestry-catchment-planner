import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";
import Partner from "./PartnerCard";

type Data = {
  heading: string;
  partners: {
    id: string;
    name: string;
    about: string;
    role: string;
    src: string;
    srcDark: string;
  }[];
};

export default async function Partners() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/8",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }

  return (
    <section className="min-h-screen border-t border-brand-950 bg-background p-6 dark:border-brand-900">
      <h2 className="w-fit text-balance py-12 text-3xl font-medium text-brand-950 dark:text-brand-50 sm:text-4xl md:text-5xl lg:sticky lg:top-0 lg:text-6xl">
        {content?.heading}
      </h2>
      <div className="flex h-full items-center justify-end">
        <div className="flex w-full flex-col items-center justify-center md:w-3/4">
          {content?.partners.map((partner) => {
            return (
              <Partner
                key={partner.id}
                id={partner.id}
                name={partner.name}
                about={partner.about}
                role={partner.role}
                src={partner.src}
                srcDark={partner.srcDark}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
