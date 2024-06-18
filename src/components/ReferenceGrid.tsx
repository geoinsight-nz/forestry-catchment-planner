"use client";

import useKeyPress from "@/hooks/useKeyPress";
import { useEffect, useState } from "react";

// CTRL-G to display reference grid
export default function ReferenceGrid() {
  const env = process.env.NODE_ENV;

  const columns = Array(24).fill(null);

  const [displayReferenceGrid, setDisplayReferenceGrid] = useState(false);

  useKeyPress(
    () => setDisplayReferenceGrid((state) => !state),
    ["KeyG"],
    "ctrlKey",
  );

  // Add an outline to all elements when grid is active
  useEffect(() => {
    if (env === "production") return;
    const allElements = document.querySelectorAll("*");

    if (displayReferenceGrid) {
      allElements.forEach((element) =>
        element.classList.add(
          "outline-1",
          "outline",
          "outline-[rgba(3,108,219,0.4)]",
        ),
      );
    } else {
      allElements.forEach((element) =>
        element.classList.remove(
          "outline-1",
          "outline",
          "outline-[rgba(3,108,219,0.4)]",
        ),
      );
    }
  }, [displayReferenceGrid, env]);

  return env !== "production" && displayReferenceGrid ? (
    <div className="pointer-events-none fixed left-0 top-0 z-[1000] grid h-screen w-screen grid-cols-[repeat(24,1fr)] gap-x-0 px-2">
      {columns.map((_, index) => {
        return (
          <div
            key={"col-" + index}
            className="h-full w-full bg-[rgba(255,0,0,0.1)]"
          />
        );
      })}
    </div>
  ) : null;
}
