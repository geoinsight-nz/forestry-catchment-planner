"use client";

import DynamicImage from "@/components/shared/DynamicImage";
import { type StaticImageData } from "next/image";

type PartnerProps = {
  title: string;
  about: string;
  body: string;
  id: string;
  src: StaticImageData;
  srcDark: StaticImageData;
};

export default function Partner({
  title,
  about,
  body,
  src,
  srcDark,
}: PartnerProps) {
  return (
    <div className="group flex w-full flex-col items-center gap-6 border-t border-solid border-t-[var(--foreground)] py-[48px] transition last-of-type:border-b last-of-type:border-solid last-of-type:border-b-[var(--foreground)] md:flex-row">
      <div className="flex flex-col gap-6 transition duration-300">
        <div className="flex gap-4">
          <h2 className="text-xl font-medium text-brand-950 dark:text-brand-50">
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
      <div className="relative mr-auto h-auto w-56 max-h-56 md:ml-auto">
        <DynamicImage
          src={src}
          srcDark={srcDark}
          alt={title}
          className="md:mx-auto"
        />
      </div>
    </div>
  );
}
