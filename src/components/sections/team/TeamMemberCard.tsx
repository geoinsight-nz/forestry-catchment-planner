/* eslint-disable @next/next/no-img-element */
type TeamMemberProps = {
  name: string;
  role?: string;
  instition: string;
  id: string;
  image: string;
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
      <div className="relative h-full w-full">
        <img
          id={id}
          src={image}
          alt={name}
          className="aspect-[2/3] h-full w-full object-cover object-top"
        />
      </div>
      <div className="mt-auto flex h-12 flex-col pt-2">
        <h3 className="text-base font-medium text-foreground dark:text-inverted-foreground">{name}</h3>
        {role && (
          <h3 className="text-xs font-normal uppercase text-foreground dark:text-inverted-foreground">
            {role}
          </h3>
        )}
        {instition && (
          <h3 className="text-xs font-normal uppercase text-foreground dark:text-inverted-foreground">
            {instition}
          </h3>
        )}
      </div>
    </div>
  );
}
