import { Prose } from "@/components/mdx/Prose";
import {
  ApproximateEquals,
  MapPin,
  Plant,
  Presentation,
  ShieldWarning,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Q1 from "./Q1";
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
          <h3 className="text-xl font-medium text-brand-50 dark:text-brand-50">
            Visualizing Clearfell Harvesting Regions
          </h3>
          <Prose>
            <p className="text-base text-brand-50 dark:text-brand-50">
              How can we visualize regions and catchments where significant
              clearfell harvesting is anticipated, and assess the associated
              risks for potential mass erosion?
            </p>
          </Prose>
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
          <h3 className="text-xl font-medium text-brand-50 dark:text-brand-50">
            Landslide Vulnerability and Debris Flow Prediction
          </h3>
          <Prose>
            <p className="text-base text-brand-50 dark:text-brand-50">
              Can we identify areas approaching harvest and classify the
              vulnerability of the underlying land to landslides, as well as
              predict the probability of debris flows in the context of large
              storm events?
            </p>
          </Prose>
        </aside>
        <aside className="flex h-80 w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <Plant size={48} className="text-brand-50 dark:text-brand-50" />
          </div>
          <h3 className="text-xl font-medium text-brand-50 dark:text-brand-50">
            Managing Intergenerational Risks in Forestry
          </h3>
          <Prose>
            <p className="text-base text-brand-50 dark:text-brand-50">
              How do we understand and manage the intergenerational risks
              arising from the overlap of forestry harvesting cycles and extreme
              weather events?
            </p>
          </Prose>
        </aside>
        <div className="flex h-[22rem]  w-full flex-col gap-y-6 md:w-80">
          <div className="flex gap-x-2">
            <UsersThree
              size={48}
              className="text-brand-50 dark:text-brand-50"
            />
          </div>
          <h3 className="text-xl font-medium text-brand-50 dark:text-brand-50">
            Empowering Tangata Whenua
          </h3>
          <Prose>
            <p className="text-base text-brand-50 dark:text-brand-50">
              What measures can empower tangata whenua to protect cultural
              heritage while promoting holistic land use thinking and proactive
              catchment planning?
            </p>
          </Prose>
        </div>
      </div>
    </section>
  );
}
