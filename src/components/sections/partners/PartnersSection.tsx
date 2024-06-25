import Partner from "./Partner";

const partners = [
  {
    id: "geoinsight",
    title: "GeoInsight",
    about:
      "GeoInsight is a geospatial software consultancy offering customised mapping solutions to help companies identify patterns, make informed decisions, and communicate better for a sustainable future.",
    body: "They were responsible for the project management and coordination of effort across all project work streams. Their key function in the project focused on geospatial data visualisation and communicating the complex science in an intuitive and user friendly manner.",
    src: "geoinsight.png",
    color: "#BBE2E6",
  },
  {
    id: "gns",
    title: "GNS Science",
    about:
      "GNS Science envisions a cleaner, safer, and more prosperous future for Aotearoa New Zealand by researching geological and Earth-system processes, increasing resilience to natural hazards and climate change, and driving sustainable economic growth in the energy sector.",
    body: "Their role in the project was a significant one, calculating the Landslide susceptibility modelling using their internal Rainfall Induced Landslide Models, deriving Hillslope and Catchment Management Units from available watershed data sources and calculating the Melton Ratios for debris flow probability.",
    src: "gns.png",
    color: "#000000",
  },
  {
    id: "uc",
    title: "The University of Canterbury",
    about:
      "The University of Canterbury (UC) is the only university in New Zealand offering professional forestry degree programs, with researchers working on industry-driven and academic projects in Forestry Science and Forest Engineering, fostering strong relationships with local forest organisations.",
    body: "Their role in the project was significant and provided key insight into forestry contexts, guidance around the analysis, literature review and assistance throughout the Landslide and Melton ratio modelling.",
    src: "university_canterbury.png",
    color: "#BBE2E6",
  },
  {
    id: "indufor",
    title: "Indufor",
    about:
      "Indufor Group, a leading forest sector consulting firm with over 43 years of experience, provides high-quality analysis and services to develop sustainable, nature-based forest management solutions addressing global challenges and supporting clients' missions.",
    body: "Indufors role in the project was to calculate forest stand ages and the spatial extents of the forest stands across Te Tauihu (Top of the South Island), Te Matau-a-Māui (Hawkes Bay), and Tairāwhiti (Gisborne).",
    src: "indufor.png",
    color: "#000000",
  },
];

export default function PartnersSection() {
  return (
    <section className="min-h-screen bg-background py-20 px-6">
      <h1 className="sticky top-0 py-16 w-fit text-3xl font-medium leading-none tracking-tighter text-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
        Partners
      </h1>
      <div className="flex h-full items-center justify-end">
        <div className="flex w-3/4 flex-col items-center justify-center">
          {partners.map((partner) => {
            return (
              <Partner
                key={partner.id}
                id={partner.id}
                title={partner.title}
                about={partner.about}
                body={partner.body}
                src={partner.src}
                color={partner.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
