"use client";

type PartnerProps = {
  title: string;
  about: string;
  body: string;
  id: string;
  src: string;
  color: string;
};

export default function Partner({ title, about, body }: PartnerProps) {
  return (
    <div className="group flex w-full items-center justify-between border-t border-solid border-t-[var(--foreground)] py-[48px] transition last-of-type:border-b last-of-type:border-solid last-of-type:border-b-[var(--foreground)]">
      <div className="flex flex-col gap-6 transition duration-300">
        <div className="flex gap-4">
          <h2 className="text-xl font-bold text-brand-950 dark:text-brand-50">
            {title}
          </h2>
        </div>
        <div className="relative flex flex-col gap-4">
          <p className="max-w-prose text-base text-brand-950 dark:text-brand-50">
            {about}
          </p>
          <p className="max-w-prose text-base text-brand-950  dark:text-brand-50">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
