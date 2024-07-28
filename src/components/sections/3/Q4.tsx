import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { QuestionsMDX } from "./QuestionsMDX";

export default function Q4() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/3/questions",
    "q4.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <QuestionsMDX source={src} />
    </Suspense>
  );
}
