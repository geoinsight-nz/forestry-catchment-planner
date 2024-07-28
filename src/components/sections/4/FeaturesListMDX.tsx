/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {};

export function FeaturesListMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
