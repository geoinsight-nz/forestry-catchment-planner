import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { FeaturesMDX } from "./FeaturesMDX";

export default function F3() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/sections/4/features",
    "f3.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <FeaturesMDX source={src} />
    </Suspense>
  );
}
