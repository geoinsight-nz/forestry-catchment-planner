import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { FeaturesHeadingMDX } from "./FeaturesHeadingMDX";

export default function FeaturesHeading() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/sections/4/heading",
    "4.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <FeaturesHeadingMDX source={src} />
    </Suspense>
  );
}
