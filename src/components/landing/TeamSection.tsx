import TeamMemberCard from "@/components/TeamMemberCard";

const team = [
  {
    name: "Andrew Holdaway",
    role: "Adjunct Senior Fellow",
    instition:
      "Te Kura Ngahere New Zealand School of Forestry, University of Canterbury",
    id: "andrew-holdaway",
    image: "/images/melton_ratios.jpg",
  },
  {
    name: "Mark Bloomberg",
    role: "Adjunct Senior Fellow",
    instition:
      "Te Kura Ngahere New Zealand School of Forestry, University of Canterbury",
    id: "mark-bloomberg",
    image: "/images/melton_ratios.jpg",
  },
  {
    name: "Brenda Rosser",
    role: "Science Lead",
    instition: "GNS Science",
    id: "brenda-rosser",
    image: "/images/melton_ratios.jpg",
  },
  {
    name: "Mark Spencer",
    role: "Director, Operations Manager",
    instition: "GeoInsight",
    id: "mark-spencer",
    image: "/images/melton_ratios.jpg",
  },
  {
    name: "Pete Watt",
    instition: "Indufor",
    id: "pete-watt",
    image: "/images/melton_ratios.jpg",
  },
  {
    name: "Rob Besaans",
    role: "Director, Geospatial & Software Lead",
    instition: "GeoInsight",
    id: "rob-besaans",
    image: "/images/melton_ratios.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="h-full min-h-screen bg-background p-6">
      <h1 className="py-6 text-3xl font-medium leading-none tracking-tighter text-foreground dark:text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
        Team
      </h1>
      <div className="grid grid-flow-row grid-cols-5 gap-x-2 gap-y-32 pt-6">
        {team.map((member) => (
          <div key={member.id} className="col-span-1 w-auto">
            <TeamMemberCard
              id={member.id}
              name={member.name}
              role={member.role}
              instition={member.instition}
              image={member.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
