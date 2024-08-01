import { cn } from "@/lib/utils";
import Image from "next-export-optimize-images/image";
import { type ImageProps } from "next/image";
import Link from "next/link";
import { Children, type ComponentPropsWithoutRef } from "react";

export const a = Link;

export function H1(props: ComponentPropsWithoutRef<"h1">) {
  return <h1 className="text-balance" {...props} />;
}

export function H2(props: ComponentPropsWithoutRef<"h1">) {
  return <h2 className="text-balance" {...props} />;
}

export function H3(props: ComponentPropsWithoutRef<"h1">) {
  return <h3 className="text-balance" {...props} />;
}

export const img = (props: ImageProps) => (
  <Image
    sizes="100vw"
    className="h-full w-full rounded-sm"
    placeholder="blur"
    {...props}
    alt={props.alt || ""}
  />
);

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  );
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode;
  sticky?: boolean;
}) {
  return (
    <div
      className={cn(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:sticky xl:top-24",
      )}
    >
      {children}
    </div>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="h-auto w-48 max-w-xs">{children}</div>;
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul
      role="list"
      className="m-0 max-w-full list-none rounded-lg p-0 dark:ring-1 dark:ring-white/10"
    >
      {Children.map(children, (child, childIndex) => (
        <li
          className={cn(
            "ui-not-focus-visible:outline-none m-0 flex break-before-auto items-center p-0 text-sm text-zinc-600 transition dark:border-zinc-800 dark:text-zinc-400",
            childIndex % 2 === 0
              ? "bg-zinc-100 dark:bg-transparent"
              : "bg-transparent dark:bg-white/2.5",
          )}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="m-0 h-fit w-auto hyphens-auto break-words px-2 py-0">
      {children}
    </span>
  );
}
