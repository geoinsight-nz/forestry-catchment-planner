import Partner from "./Partner";

const partners = [
  {
    id: "geoinsight",
    title: "GeoInsight",
    body: "GeoInsight, a geospatial software consultancy, specialises in customised mapping solutions for sustainable decision-making and communication, and they were responsible for the project management and communication of the complex science in an accessible and intuitive form.",
    src: "geoinsight.png",
    color: "#BBE2E6",
  },
  {
    id: "indufor",
    title: "Indufor",
    body: "Indufor Group, a leading forest sector consulting firm with over 43 years of experience, provides high-quality analysis and services to develop sustainable, nature-based forest management solutions addressing global challenges and supporting clients' missions.",
    src: "indufor.png",
    color: "#000000",
  },
  {
    id: "gns",
    title: "GNS Science",
    body: "GNS Science envisions a cleaner, safer, and more prosperous future for Aotearoa New Zealand by researching geological and Earth-system processes, increasing resilience to natural hazards and climate change, and driving sustainable economic growth in the energy sector.",
    src: "gns.png",
    color: "#000000",
  },
  {
    id: "uc",
    title: "Te Kura Ngahere",
    subtitle: "The School of Forestry",
    body: "The University of Canterbury (UC) is the only university in New Zealand offering professional forestry degree programs, with researchers working on industry-driven and academic projects in Forestry Science and Forest Engineering, fostering strong relationships with local forest organisations.",
    src: "university_canterbury.png",
    color: "#BBE2E6",
  },
];

export default function PartnersSection() {
  return (
    <section className="h-screen bg-background p-6">
      <h1 className="py-6 text-3xl font-medium leading-none tracking-tighter text-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
        Partners
      </h1>
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          {partners.map((partner) => {
            return (
              <Partner
                key={partner.id}
                id={partner.id}
                title={partner.title}
                subtitle={partner.subtitle}
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
