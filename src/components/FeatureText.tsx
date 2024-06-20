"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/stores/store";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  id: string;
  title: string;
  body: string;
};

export const FeatureText = ({ id, title, body }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <div className="py-16">
      <h2
        className={cn(
          "text-2xl font-bold transition-colors text-foreground dark:text-foregound",
        )}
      >
        {title}
      </h2>
      <p
        ref={ref}
        className={cn(
          "pt-6 text-2xl transition-colors text-foreground dark:text-foregound",
        )}
      >
        {body}
      </p>
    </div>
  );
};
