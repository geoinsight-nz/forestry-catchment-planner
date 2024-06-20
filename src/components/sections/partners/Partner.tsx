"use client";

type PartnerProps = {
  title: string;
  subtitle?: string | null;
  body: string;
  id: string;
  src: string;
  color: string;
};

export default function Partner({ title, subtitle, body }: PartnerProps) {
  return (
    <div className="group flex w-full items-center justify-between border-t border-solid border-t-[var(--foreground)] px-[100px] py-[50px] transition last-of-type:border-b last-of-type:border-solid last-of-type:border-b-[var(--foreground)] group-hover:opacity-50">
      <h2 className="text-6xl font-normal transition duration-300 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <h2 className="text-6xl font-normal transition duration-300 group-hover:-translate-x-2.5">
        {subtitle}
      </h2>
      <p className="font-light transition duration-300 group-hover:translate-x-2.5">
        {body}
      </p>
    </div>
  );
}
