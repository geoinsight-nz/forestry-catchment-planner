import { Prose } from "@/components/mdx/Prose";

export default function ScienceSection() {
  return (
    <section
      id="science"
      className="h-full min-h-screen w-full bg-background p-6"
    >
      <header className="mb-[80px] max-w-[50vw]">
        <h2 className="text-balance text-3xl font-medium tracking-tighter text-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Key questions
        </h2>
      </header>
      <div className="grid h-full max-w-full grid-cols-1 place-items-center gap-x-[8vw] gap-y-[2vw] sm:grid-cols-2 lg:pl-[24vw]">
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <LocationIcon />
          <h3 className="text-xl text-foreground">
            Forest Location and Age Classification
          </h3>
          <Prose>
            <p className="text-base">
              Where are the exotic forests located across Te Tauihu, Te
              Matau-a-Māui, and Tairāwhiti, and how can we classify them by age
              to identify maturing forests?
            </p>
          </Prose>
        </aside>
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <AdjustmentsIcon />
          <h3 className="text-xl text-foreground">
            Visualizing Clearfell Harvesting Regions
          </h3>
          <Prose>
            <p className="text-base">
              How can we visualize regions and catchments where significant
              clearfell harvesting is anticipated, and assess the associated
              risks for potential mass erosion?
            </p>
          </Prose>
        </aside>
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <TreesIcon />
          <h3 className="text-xl text-foreground">
            Landslide Vulnerability and Debris Flow Prediction
          </h3>
          <Prose>
            <p className="text-base">
              Can we identify areas approaching harvest and classify the
              vulnerability of the underlying land to landslides, as well as
              predict the probability of debris flows in the context of large
              storm events?
            </p>
          </Prose>
        </aside>
        <aside className="flex h-80 w-80 flex-col gap-y-6">
          <ComputerIcon />
          <h3 className="text-xl text-foreground">
            Managing Intergenerational Risks in Forestry
          </h3>
          <Prose>
            <p className="text-base">
              How do we understand and manage the intergenerational risks
              arising from the overlap of forestry harvesting cycles and extreme
              weather events?
            </p>
          </Prose>
        </aside>
        <div className="flex h-[22rem] w-80 flex-col gap-y-6">
          <RainbowIcon />
          <h3 className="text-xl text-foreground">Empowering Tangata Whenua</h3>
          <Prose>
            <p className="text-base">
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
      stroke-width="1"
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

function RainbowIcon(props: React.ComponentPropsWithoutRef<"svg">) {
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
      className="lucide lucide-rainbow"
      {...props}
    >
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </svg>
  );
}
