import Application from "./Application";
import Context from "./Context";

export default function IntroSection() {
  return (
    <div className="flex h-full flex-col bg-background dark:bg-brand-950">
      <Context />
      <Application />
    </div>
  );
}
