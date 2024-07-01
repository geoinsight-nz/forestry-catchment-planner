import Image from "next-export-optimize-images/image";
import { type ImageProps } from "next/image";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

export const a = Link;

export function Heading(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className="text-balance" {...props} />;
}

export const img = (props: ImageProps) => (
  <Image
    sizes="100vw"
    className="h-auto w-full"
    width={600}
    height={400}
    {...props}
    alt={props.alt || ""}
  />
);
