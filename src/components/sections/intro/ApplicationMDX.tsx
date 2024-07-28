/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Prose } from "@/components/mdx/Prose";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type ClassAttributes, type HTMLAttributes, type JSX } from "react";

const components = {
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <header className="mb-14">
      <h2
        {...props}
        className="mb-14 text-balance text-xl font-medium text-brand-950 dark:text-foreground lg:text-3xl"
      >
        {props.children}
      </h2>
    </header>
  ),
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <Prose className="mx-auto">
      <article>
        <p className="text-balance text-sm font-normal text-brand-950 dark:text-foreground lg:text-base">
          {props.children}
        </p>
      </article>
    </Prose>
  ),
};

export function ApplicationMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
