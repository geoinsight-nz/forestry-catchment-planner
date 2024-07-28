import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { QuestionsMDX } from "./QuestionsMDX";

export default function QuestionsText() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/questions",
    "q1.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <QuestionsMDX source={src} />
    </Suspense>
  );
}
