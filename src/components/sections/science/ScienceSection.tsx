import { Prose } from "@/components/mdx/Prose";

export default function ScienceSection() {
  return (
    <section
      id="science"
      className="h-full min-h-screen w-full bg-brand-900 p-6 dark:bg-brand-950"
    >
      <header className="mb-[80px]">
        <h2 className="text-balance text-3xl font-medium text-brand-50 dark:text-brand-50 sm:text-4xl md:text-5xl lg:text-6xl">
          Key questions
        </h2>
      </header>
      <div className="grid h-full max-w-full grid-cols-1 place-items-center gap-x-[8vw] gap-y-[2vw] sm:grid-cols-2 lg:pl-[24vw]">
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <LocationIcon className="size-8 text-brand-50 dark:text-brand-50" />
          <h3 className="text-xl text-brand-50 dark:text-brand-50">
            Forest Location and Age Classification
          </h3>
          <Prose>
            <p className="text-base text-brand-50 dark:text-brand-50">
              Where are the exotic forests located across Te Tauihu, Te
              Matau-a-Māui, and Tairāwhiti, and how can we classify them by age
              to identify maturing forests?
            </p>
          </Prose>
        </aside>
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <AdjustmentsIcon className="size-8 text-brand-50 dark:text-brand-50" />
          <h3 className="text-xl text-brand-50 dark:text-brand-50">
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
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <TreesIcon className="size-8 text-brand-50 dark:text-brand-50" />
          <h3 className="text-xl text-brand-50 dark:text-brand-50">
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
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <BoxesIcon className="size-8 text-brand-50 dark:text-brand-50" />
          <h3 className="text-xl text-brand-50 dark:text-brand-50">
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
        <div className="flex h-[22rem] w-80 flex-col gap-y-6">
          <SproutIcon className="size-8 text-brand-50 dark:text-brand-50" />
          <h3 className="text-xl text-brand-50 dark:text-brand-50">
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

function LocationIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AdjustmentsIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
      {...props}
    >
      <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    </svg>
  );
}

function ComputerIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-computer"
      {...props}
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function TreesIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-trees"
      {...props}
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  );
}

function SproutIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-sprout"
      {...props}
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}

function BoxesIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-boxes"
      {...props}
    >
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </svg>
  );
}
