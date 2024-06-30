"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type DynamicImageProps = {
  srcDark?: StaticImageData;
} & ImageProps;

export default function DynamicImage({
  src,
  srcDark,
  ...props
}: DynamicImageProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchDarkMode.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    matchDarkMode.addEventListener("change", handleChange);

    return () => {
      matchDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  const imageSrc = srcDark && isDarkMode ? srcDark : src;
  return (
      <Image
        src={imageSrc}
        sizes="100vw"
        className={props.className}
        {...props}
        alt={props.alt || ""}
      />
  );
}
