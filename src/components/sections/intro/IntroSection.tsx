import Application from "./Application";
import Context from "./Context";

export default function IntroSection() {
  return (
    <div className="flex h-full flex-col gap-y-24 bg-brand-700 py-24 dark:bg-zinc-900 sm:gap-y-48">
      <Context />
      <Application />
    </div>
  );
}
