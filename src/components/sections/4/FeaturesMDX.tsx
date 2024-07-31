"use client";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Prose } from "@/components/mdx/Prose";
import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import { useInView } from "framer-motion";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  useEffect,
  useRef,
  type ClassAttributes,
  type HTMLAttributes,
  type JSX,
} from "react";

export function FeaturesMDX(props: any) {
  const components = {
    h3: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>,
    ) => (
      <h2
        {...props}
        className={cn(
          isInView ? "opacity-100" : "opacity-80",
          "text-balance text-xl font-medium text-brand-950 transition-colors dark:text-brand-50 lg:text-3xl",
        )}
      >
        {props.children}
      </h2>
    ),
    p: (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLHeadingElement> &
        HTMLAttributes<HTMLHeadingElement>,
    ) => (
      <Prose className="mx-auto">
        <p
          ref={ref}
          className={cn(
            isInView ? "opacity-100" : "opacity-80",
            "pt-6 text-sm font-normal text-brand-950 transition-colors dark:text-brand-50 lg:text-base",
          )}
        >
          {props.children}
        </p>
      </Prose>
    ),
  };
  const { id } = props ?? {};

  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  console.log(inViewFeature);

  return (
    <div className="py-16" ref={ref}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}
