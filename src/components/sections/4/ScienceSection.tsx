import {
  ApproximateEquals,
  MapPin,
  Plant,
  Presentation,
  ShieldWarning,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import ScienceHeading from "./ScienceHeading";

export default function ScienceSection() {
  return (
    <section
      id="science"
      className="h-full min-h-screen w-full border-t border-brand-900 bg-brand-900 p-6 dark:border-brand-500 dark:bg-brand-950"
    >
      <ScienceHeading />
      <div className="grid h-full max-w-full grid-cols-1 place-items-center gap-x-[8vw] gap-y-[2vw] md:grid-cols-2 lg:pl-[24vw]">
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <MapPin size={48} className="text-brand-50 dark:text-brand-50" />
          </div>
          <Q1 />
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <Presentation
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          <Q2 />
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <ShieldWarning
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
            <ApproximateEquals
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          <Q3 />
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <Plant size={48} className="text-brand-50 dark:text-brand-50" />
          </div>
          <Q4 />
        </aside>
        <div className="flex h-[22rem]  w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <UsersThree
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          <Q5 />
        </div>
      </div>
    </section>
  );
}
