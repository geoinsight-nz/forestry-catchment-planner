import Link from "next/link";

function TopLevelNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <nav className="hidden md:block">
      <ul role="list" className="flex items-center gap-8">
        <TopLevelNavItem href="#">Open app ↗</TopLevelNavItem>
        <TopLevelNavItem href="/">Documentation</TopLevelNavItem>
      </ul>
    </nav>
  );
}
