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
      <h3
        {...props}
        className="text-balance text-3xl font-medium text-brand-50 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {props.children}
      </h3>
    </header>
  ),
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <Prose className="mx-auto">
        <p className="text-base text-brand-50 dark:text-brand-50">
          {props.children}
        </p>
    </Prose>
  ),
};

export function QuestionsMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
