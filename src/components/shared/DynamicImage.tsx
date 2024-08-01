import Image from "next-export-optimize-images/image";
import { type ImageProps } from "next/image";

type DynamicImageProps = {
  srcDark?: string;
} & ImageProps;

export default function DynamicImage({
  src,
  srcDark,
  ...props
}: DynamicImageProps) {
  return (
    <>
      <div data-hide-on-theme="dark" className="dark:hidden">
        <Image
          src={src}
          sizes={props.sizes ?? "100vw"}
          className={props.className}
          placeholder="blur"
          {...props}
          alt={props.alt ?? ""}
        />
      </div>
      <div data-hide-on-theme="light" className="hidden dark:block">
        <Image
          src={srcDark ?? src}
          sizes={props.sizes ?? "100vw"}
          className={props.className}
          placeholder="blur"
          {...props}
          alt={props.alt ?? ""}
        />
      </div>
    </>
  );
}
