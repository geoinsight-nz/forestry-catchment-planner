import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { ContextMDX } from "./ContextMDX";

export default function ContextText() {
  // MDX text file for this component
  const filePath = path.join(process.cwd(), "src/app/_mdx-content", "context.mdx");
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <ContextMDX source={src} />
    </Suspense>
  );
}
