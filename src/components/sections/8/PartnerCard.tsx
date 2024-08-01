import DynamicImage from "@/components/shared/DynamicImage";

type PartnerProps = {
  name: string;
  about: string;
  role: string;
  id: string;
  src: string;
  srcDark: string;
};

export default function PartnerCard({
  name,
  about,
  role,
  src,
  srcDark,
}: PartnerProps) {
  return (
    <div className="group flex w-full flex-col items-center gap-6 border-t border-solid border-t-[var(--foreground)] py-[48px] transition last-of-type:border-b last-of-type:border-solid last-of-type:border-b-[var(--foreground)] md:flex-row">
      <div className="flex flex-col gap-6 transition duration-300">
        <div className="flex gap-4">
          <h2 className="text-xl font-medium text-brand-950 dark:text-brand-50">
            {name}
          </h2>
        </div>
        <div className="relative flex flex-col gap-4">
          <p className="max-w-prose text-base text-brand-950 dark:text-brand-50">
            {about}
          </p>
          <p className="max-w-prose text-base text-brand-950  dark:text-brand-50">
            {role}
          </p>
        </div>
      </div>
      <div className="relative mr-auto h-auto max-h-56 w-56 md:ml-auto">
        <DynamicImage
          src={src}
          srcDark={srcDark}
          alt={name}
          width={224}
          height={224}
          className="md:mx-auto"
        />
      </div>
    </div>
  );
}
