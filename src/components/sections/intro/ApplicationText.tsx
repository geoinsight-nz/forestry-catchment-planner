import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { ApplicationMDX } from "./ApplicationMDX";

export default function ApplicationText() {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content",
    "application.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");
  return (
    <Suspense>
      <ApplicationMDX source={src} />
    </Suspense>
  );
}
