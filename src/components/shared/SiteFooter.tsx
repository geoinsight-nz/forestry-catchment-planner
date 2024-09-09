import Link from "next/link";

type FooterNavItem = {
  href: string;
  name: string;
  link: boolean;
};

type FooterNavSet = {
  label: string;
  items: FooterNavItem[];
};

const footerNavs: FooterNavSet[] = [
  {
    label: "Tool",
    items: [
      {
        href: "https://www.docs.forestrycatchmentplanner.nz",
        name: "Documentation",
        link: true,
      },
      {
        href: "https://catchment.maphq.co.nz/",
        name: "Application",
        link: true,
      },
      {
        href: "mailto:info@geoinsight.co.nz",
        name: "Contact",
        link: true,
      },
    ],
  },
  {
    label: "Partners",
    items: [
      {
        href: "https://www.geoinsight.co.nz",
        name: "GeoInsight",
        link: true,
      },
      {
        href: "https://induforgroup.com",
        name: "Indufor",
        link: true,
      },
      {
        href: "https://www.gns.cri.nz",
        name: "GNS Science",
        link: true,
      },
      {
        href: "https://www.canterbury.ac.nz/study/academic-study/engineering/schools-and-departments-engineering-forestry-product-design/school-of-forestry",
        name: "The University of Canterbury",
        link: true,
      },
    ],
  },
  {
    label: "Contributors",
    items: [
      {
        href: "https://www.linkedin.com/in/usha-macdonald-95388314a",
        name: "Usha MacDonald",
        link: true,
      },
      {
        href: "https://www.linkedin.com/in/brad-chandler-445b8797",
        name: "Brad Chandler",
        link: true,
      },
      {
        href: "https://www.linkedin.com/in/alexkorban",
        name: "Alex Korban",
        link: true,
      },
      {
        href: "https://www.linkedin.com/in/brian-law-a5a50184",
        name: "Brian Law",
        link: true,
      },
      {
        href: "https://www.linkedin.com/in/monkey-code-good",
        name: "John Grant",
        link: true,
      },
    ],
  },
  {
    label: "Colophon",
    items: [
      {
        href: "",
        name: "Design:",
        link: false,
      },
      {
        href: "",
        name: "Blaine Western",
        link: false,
      },
      {
        href: "",
        name: "Henry Babbage",
        link: false,
      },
      {
        href: "",
        name: "Development:",
        link: false,
      },
      {
        href: "https://www.github.com/henrybabbage",
        name: "Henry Babbage",
        link: true,
      },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="">
      <div className="max-w-screen w-full xl:pb-2">
        <div className="gap-4 p-4 px-6 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link
              href="https://catchment.staging.maphq.co.nz"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2"
            >
              <span className="self-center text-2xl font-semibold dark:text-white">
                Forestry Catchment Planner
              </span>
            </Link>
            <p className="max-w-1/4">
              Proactive forest management for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:max-w-4xl sm:grid-cols-4 sm:gap-10">
            {footerNavs.map((nav: FooterNavSet) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item: FooterNavItem) => (
                    <li
                      key={item.name}
                      className="flex h-full w-full items-center"
                    >
                      {item.link === true ? (
                        <Link
                          href={item.href}
                          className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <h3 className="flex h-full text-sm font-[450] text-gray-400">
                          {item.name}
                        </h3>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              GeoInsight
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
