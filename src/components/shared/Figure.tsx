"use client";

import Image from "next-export-optimize-images/image";
import { type ImageProps, type StaticImageData } from "next/image";

type FigureProps = {
  caption?: string;
  srcDark?: StaticImageData;
} & ImageProps;

export function Figure({ src, srcDark, ...props }: FigureProps) {
  return (
    <figure className="relative">
      <>
        <div data-hide-on-theme="dark" className="dark:hidden">
          <Image
            src={src}
            sizes="100vw"
            className="h-full w-full rounded-sm"
            placeholder="blur"
            {...props}
            alt={props.alt || ""}
          />
        </div>
        <div data-hide-on-theme="light" className="hidden dark:block">
          <Image
            src={srcDark ?? src}
            sizes="100vw"
            className="h-full w-full rounded-sm"
            placeholder="blur"
            {...props}
            alt={props.alt || ""}
          />
        </div>
      </>
      {props.caption && (
        <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
}
