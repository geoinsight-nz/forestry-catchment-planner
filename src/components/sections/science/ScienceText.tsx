import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { ScienceMDX } from "./ScienceMDX";

export default function ScienceText() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/questions",
    "questions.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <ScienceMDX source={src} />
    </Suspense>
  );
}
