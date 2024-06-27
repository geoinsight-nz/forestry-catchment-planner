import { Prose } from "@/components/mdx/Prose";
import Image, { type StaticImageData } from "next/image";

type TeamMemberProps = {
  name: string;
  role?: string;
  instition: string;
  id: string;
  image: StaticImageData;
};

export default function TeamMemberCard({
  name,
  role,
  instition,
  id,
  image,
}: TeamMemberProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative">
        <Image
          id={id}
          src={image}
          alt={name}
          sizes="20vw"
          className="aspect-[2/3] h-auto w-full rounded-sm object-cover object-top"
        />
      </div>
      <div className="flex h-fit flex-col items-start justify-start pt-3">
        <Prose>
          <h3 className="text-lg font-medium text-foreground dark:text-inverted-foreground">
            {name}
          </h3>
          <span className="m-0 flex flex-col gap-0 p-0">
            {role && (
              <p className="m-0 p-0 text-xs font-normal text-foreground dark:text-inverted-foreground">
                {role}
              </p>
            )}
            {instition && (
              <p className="m-0 p-0 text-xs font-normal text-foreground dark:text-inverted-foreground">
                {instition}
              </p>
            )}
          </span>
        </Prose>
      </div>
    </div>
  );
}
