import DynamicImage from "@/components/shared/DynamicImage";
import fs from "fs";
import path from "path";
import { Fragment, Suspense } from "react";
import { FeaturesMDX } from "./FeaturesMDX";

export default function F2({ id, image }: { id: string; image: string }) {
  // MDX text file for this component
  const filePath = path.join(
    process.cwd(),
    "src/app/_mdx-content/sections/4/features",
    "f2.mdx",
  );
  // Read the contents of the MDX file
  const src = fs.readFileSync(filePath, "utf8");

  return (
    <Fragment>
      <figure className="relative flex h-[56vw] w-auto flex-col gap-4 lg:hidden">
        <DynamicImage
          src={image}
          alt="Forestry Catchment Planner feature"
          fill
          className="h-full w-auto rounded-sm object-contain"
        />
      </figure>
      <li>
        <Suspense>
          <FeaturesMDX source={src} id={id} />
        </Suspense>
      </li>
    </Fragment>
  );
}
