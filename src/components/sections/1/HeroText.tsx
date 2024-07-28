import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { HeroMDX } from "./HeroMDX";

export default function HeroText() {
  // MDX text file for this component
  const filePath = path.join(process.cwd(), "src/app/_mdx-content/sections/1", "1.mdx");
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <HeroMDX source={src} />
    </Suspense>
  );
}
