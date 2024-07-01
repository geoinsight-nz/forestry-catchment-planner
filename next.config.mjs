/* eslint-disable @typescript-eslint/no-unsafe-call */

import createMDX from "@next/mdx";
import withExportImages from "next-export-optimize-images";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = await withExportImages({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
});

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
