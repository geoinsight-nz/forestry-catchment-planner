"use client";

type PartnerProps = {
  title: string;
  body: string;
  id: string;
  src: string;
  color: string;
};

export default function Partner({ title, body }: PartnerProps) {
  return (
    <div className="group flex w-full items-center justify-between border-t border-solid border-t-[var(--foreground)] px-[100px] py-[50px] transition last-of-type:border-b last-of-type:border-solid last-of-type:border-b-[var(--foreground)] group-hover:opacity-50">
      <div className="flex flex-col gap-6 transition duration-300 group-hover:translate-x-2.5">
        <div className="flex gap-4">
          <h2 className="text-6xl font-normal">{title}</h2>
        </div>
        <p className="max-w-prose text-base">{body}</p>
      </div>
    </div>
  );
}
