import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from "next/image";
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
      h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
      img: (props) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
        />
      ),
      ...components,
    };
}
