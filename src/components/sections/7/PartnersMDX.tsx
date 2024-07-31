/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Prose } from "@/components/mdx/Prose";
import { MDXRemote } from "next-mdx-remote/rsc";
import { type ClassAttributes, type HTMLAttributes, type JSX } from "react";

const components = {
  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <header>
      <h3
        {...props}
        className="text-xl font-medium text-brand-50 dark:text-brand-50"
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

export function PartnersMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
