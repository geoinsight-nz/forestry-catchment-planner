export default function ScienceSection() {
  return (
    <section id="science" className="h-screen w-full">
      <div className="grid-cols-auto-fill-300 grid h-full max-w-full place-items-center gap-x-4 gap-y-16">
        <div className="flex h-[22rem] w-80 flex-col">
          <p className="text-sm">
            Where are the exotic forests located across Te Tauihu, Te
            Matau-a-Māui, and Tairāwhiti, and how can we classify them by age to
            identify maturing forests?
          </p>
        </div>
        <div className="flex h-[22rem] w-80 flex-col">
          <p className="text-sm">
            How can we visualize regions and catchments where significant
            clearfell harvesting is anticipated, and assess the associated risks
            for potential mass erosion?
          </p>
        </div>
        <div className="flex h-[22rem] w-80 flex-col">
          <p className="text-sm">
            Can we identify areas approaching harvest and classify the
            vulnerability of the underlying land to landslides, as well as predict the
            probability of debris flows in the context of large storm events?
          </p>
        </div>
        <div className="flex h-[22rem] w-80 flex-col">
          <p className="text-sm">
            How do we understand and manage the intergenerational risks arising
            from the overlap of forestry harvesting cycles and extreme weather
            events?
          </p>
        </div>
        <div className="flex h-[22rem] w-80 flex-col">
          <p className="text-sm">
            What measures can empower tangata whenua to protect cultural
            heritage while promoting holistic land use thinking and proactive
            catchment planning?
          </p>
        </div>
      </div>
    </section>
  );
}
