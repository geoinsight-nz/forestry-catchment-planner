import Link from "next/link";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "https://catchment.staging.maphq.co.nz",
        name: "Application",
      },
      {
        href: "https://www.docs.forestrycatchmentplanner.nz",
        name: "Documentation",
      },
      {
        href: "mailto:info@geoinsight.co.nz",
        name: "Contact",
      },
    ],
  },
  {
    label: "Partners",
    items: [
      {
        href: "https://www.geoinsight.co.nz",
        name: "GeoInsight",
      },
      {
        href: "https://induforgroup.com",
        name: "Indufor",
      },
      {
        href: "https://www.gns.cri.nz",
        name: "GNS Science",
      },
      {
        href: "https://www.canterbury.ac.nz/study/academic-study/engineering/schools-and-departments-engineering-forestry-product-design/school-of-forestry",
        name: "The University of Canterbury",
      },
    ],
  },
  {
    label: "Imprint",
    items: [
      {
        href: "#",
        name: "Terms",
      },

      {
        href: "#",
        name: "Privacy",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link
              href="https://catchment.staging.maphq.co.nz"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2"
            >
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Forestry Catchment Planner
              </span>
            </Link>
            <p className="max-w-xs">
              Proactive forest management for the future.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
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

function Credits() {
  return <div>Credits</div>;
}
