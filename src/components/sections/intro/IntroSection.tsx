import Application from "./Application";
import Context from "./Context";

export default function IntroSection() {
  return (
    <div className="flex flex-col gap-y-24 sm:gap-y-48 h-full py-24">
      <Context />
      <Application />
    </div>
  );
}
