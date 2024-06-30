import Partner from "./Partner";
import geoinsightDark from "/public/images/logos/geoinsight_dark.webp";
import geoinsightLight from "/public/images/logos/geoinsight_light.png";
import gns from "/public/images/logos/gns_light.png";
import induforDark from "/public/images/logos/indufor_dark.png";
import induforLight from "/public/images/logos/indufor_light.png";
import uc from "/public/images/logos/uc.png";

const partners = [
  {
    id: "geoinsight",
    title: "GeoInsight",
    about:
      "GeoInsight is a geospatial software consultancy offering customised mapping solutions to help companies identify patterns, make informed decisions, and communicate better for a sustainable future.",
    body: "They were responsible for the project management and coordination of effort across all project work streams. Their key function in the project focused on geospatial data visualisation and communicating the complex science in an intuitive and user friendly manner.",
    src: geoinsightLight,
    srcDark: geoinsightDark,
  },
  {
    id: "gns",
    title: "GNS Science",
    about:
      "GNS Science envisions a cleaner, safer, and more prosperous future for Aotearoa New Zealand by researching geological and Earth-system processes, increasing resilience to natural hazards and climate change, and driving sustainable economic growth in the energy sector.",
    body: "Their role in the project was a significant one, calculating the Landslide susceptibility modelling using their internal Rainfall Induced Landslide Models, deriving Hillslope and Catchment Management Units from available watershed data sources and calculating the Melton Ratios for debris flow probability.",
    src: gns,
    srcDark: gns,
  },
  {
    id: "uc",
    title: "The University of Canterbury",
    about:
      "The University of Canterbury (UC) is the only university in New Zealand offering professional forestry degree programs, with researchers working on industry-driven and academic projects in Forestry Science and Forest Engineering, fostering strong relationships with local forest organisations.",
    body: "Their role in the project was significant and provided key insight into forestry contexts, guidance around the analysis, literature review and assistance throughout the Landslide and Melton ratio modelling.",
    src: uc,
    srcDark: uc,
  },
  {
    id: "indufor",
    title: "Indufor",
    about:
      "Indufor's resource monitoring team is part of Indufor Group, a leading forest sector consulting firm that provides high-quality analysis to forest growers, investors, and government agencies. The monitoring team specialises in creating insights from remote sensing technologies to enhance management and investment decisions.",
    body: "Indufor's role in the project was to calculate forest stand ages and map the spatial extent of the forest stands across Te Tauihu (Top of the South Island), Te Matau-a-Māui (Hawkes Bay), and Tairāwhiti (Gisborne).",
    src: induforLight,
    srcDark: induforDark,
  },
];

export default function PartnersSection() {
  return (
    <section className="min-h-screen bg-background p-6">
      <h2 className="w-fit text-balance py-12 text-3xl font-medium text-brand-950 dark:text-brand-50 sm:text-4xl md:text-5xl lg:sticky lg:top-0 lg:text-6xl">
        Partners
      </h2>
      <div className="flex h-full items-center justify-end">
        <div className="flex w-full flex-col items-center justify-center lg:w-3/4">
          {partners.map((partner) => {
            return (
              <Partner
                key={partner.id}
                id={partner.id}
                title={partner.title}
                about={partner.about}
                body={partner.body}
                src={partner.src}
                srcDark={partner.srcDark}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
