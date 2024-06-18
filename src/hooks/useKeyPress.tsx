"use client";

import { useCallback, useEffect } from "react";

function useKeyPress(
  callback: () => void,
  keyCodes: string[],
  modifier: "ctrlKey",
): void {
  const handler = useCallback(
    (event: KeyboardEvent) => {
      if (keyCodes.includes(event.code)) {
        if (modifier && !event[modifier]) return;
        callback();
      }
    },
    [callback, keyCodes, modifier],
  );

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [handler]);
}

export default useKeyPress;
