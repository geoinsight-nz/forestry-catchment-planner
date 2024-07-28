/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MDXRemote } from "next-mdx-remote/rsc";
import { type ClassAttributes, type HTMLAttributes, type JSX } from "react";

const components = {
  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <header className="mb-[80px]">
      <h2
        {...props}
        className="text-balance text-3xl font-medium text-brand-50 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {props.children}
      </h2>
    </header>
  ),
};

export function ScienceMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
