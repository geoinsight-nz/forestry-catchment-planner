import TeamMemberCard from "@/components/sections/7/TeamMemberCard";
import { readJSONFile } from "@/utils/readJSONFile";
import path from "path";

type Data = {
  heading: string;
  text: string;
  team: {
    id: string;
    name: string;
    role: string;
    institution: string;
    image: string;
  }[];
};

export default async function TeamSection() {
  const filePath = path.join(
    process.cwd(),
    "src/app/_content/sections/7",
    "content.json",
  );

  const content = await readJSONFile<Data>(filePath);

  if (content === null) {
    return null;
  }
  return (
    <section className="flex h-full min-h-full flex-col bg-background p-6 dark:bg-zinc-900">
      <header className="mb-[40px]">
        <h2 className="w-fit py-12 text-3xl font-medium text-brand-950 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl">
          {content?.heading}
        </h2>
      </header>
      <div className="grid h-full grid-cols-auto-fit-240 gap-x-2 gap-y-16 sm:gap-y-32">
        {content?.team.map((member) => (
          <div key={member.id} className="col-span-1 w-auto">
            <TeamMemberCard
              id={member?.id}
              name={member?.name}
              role={member?.role}
              instition={member?.institution}
              image={member?.image}
            />
          </div>
        ))}
      </div>
      <div className="h-12" />
    </section>
  );
}
