"use client";

import BrandIcon from "@/components/icons/BrandIcon";
import { cn } from "@/lib/utils";
import {
  ClipboardDocumentListIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItem = [
  {
    id: 1,
    label: "Documentation",
    href: "https://www.docs.forestrycatchmentplanner.nz",
  },
  {
    id: 2,
    label: "App",
    href: "https://catchment.staging.maphq.co.nz",
  },
  {
    id: 3,
    label: "Contact",
    href: "mailto:info@geoinsight.co.nz",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [headerHidden, setHeaderHidden] = useState(false);
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHeaderHidden(true);
    } else {
      setHeaderHidden(false);
    }
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      className="sticky left-0 top-0 z-50"
      animate={headerHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <header className="w-full translate-y-[-1rem] animate-fade-in border-b border-primary/50 bg-background opacity-0 [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <BrandIcon className="size-8" />
            </Link>
            <Link
              className="text-md flex items-center after:content-['FCP'] md:after:content-['Forestry_Catchment_Planner']"
              href="/"
            ></Link>
          </div>

          <div className="ml-auto hidden h-full items-center space-x-16 md:flex">
            <Link
              className="group flex space-x-4"
              href="https://docs.forestrycatchmentplanner.nz"
              target="_blank"
              rel="noopener"
            >
              <ClipboardDocumentListIcon className="size-6 text-brand-900 dark:text-foreground" />
              <h2 className="text-md group-hover:underline">Documentation</h2>
            </Link>
            <Link
              className="text-md group flex space-x-4 group-hover:underline"
              href="https://catchment.staging.maphq.co.nz/"
              target="_blank"
              rel="noopener"
            >
              <MapIcon className="size-6 text-brand-900 dark:text-foreground" />
              <h2 className="text-md group-hover:underline">Open app</h2>
            </Link>
          </div>
          <button
            className="ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            "fixed left-0 top-0 z-50 block h-screen w-full overflow-auto bg-background/70 backdrop-blur-[100px] sm:hidden",
            "pointer-events-none" && !hamburgerMenuIsOpen,
          )}
        >
          <div className="container flex h-[3.5rem] items-center justify-between">
            <Link className="text-md flex items-center" href="/">
              Forestry Catchment Planner
            </Link>

            <button
              className="ml-6 md:hidden"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className={`flex flex-col ease-in md:flex-row md:items-center md:normal-case`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className="py-0.5 pl-6"
              >
                <Link
                  className={`hover:text-grey text-md flex h-[var(--navigation-height)] w-full items-center transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </motion.div>
  );
}
