import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { ScienceHeadingMDX } from "./ScienceHeadingMDX";

export default function ScienceHeading() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/sections/3/heading",
    "3.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <ScienceHeadingMDX source={src} />
    </Suspense>
  );
}
