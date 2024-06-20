import { SiteFooter } from "@/components/global/SiteFooter";
import "@/styles/globals.css";
import localFont from "next/font/local";

import ReferenceGrid from "@/components/utilities/ReferenceGrid";
import { SiteHeader } from "@/components/global/SiteHeader";
import { ThemeProvider } from "@/components/utilities/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Forestry Catchment Planner",
  description:
    "The Forestry Catchment Planner is a web app designed to improve environmental management within the forestry sector.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      className={cn(
        "min-h-screen font-sans antialiased",
        inter.variable,
        GeistSans.variable,
      )}
      suppressHydrationWarning
    >
      <body>
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
          <ReferenceGrid />
        </ThemeProvider>
      </body>
    </html>
  );
}
