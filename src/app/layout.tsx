import { SiteFooter } from "@/components/shared/SiteFooter";
import "@/styles/globals.css";
import { type Metadata } from "next";
import localFont from "next/font/local";

import { SiteHeader } from "@/components/shared/SiteHeader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/utilities/ThemeProvider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.forestrycatchmentplanner.nz"),
  title: "Forestry Catchment Planner",
  description:
    "The Forestry Catchment Planner is a web app designed to improve environmental management within the forestry sector.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Forestry Catchment Planner",
    url: "https://www.forestrycatchmentplanner.nz",
    siteName: "Forestry Catchment Planner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://www.forestrycatchmentplanner.nz/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Forestry Catchment Planner",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("min-h-screen font-sans antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
