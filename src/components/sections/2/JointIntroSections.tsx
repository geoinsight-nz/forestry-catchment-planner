import Context from "../3/Context";
import Application from "./Application";

export default function JointIntroSections() {
  return (
    <div className="flex h-full flex-col border-t border-brand-500 bg-background dark:border-brand-500 dark:bg-brand-950">
      <Application />
      <Context />
    </div>
  );
}
