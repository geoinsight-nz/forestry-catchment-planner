import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

import ReferenceGrid from "@/components/ReferenceGrid";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Forestry Catchment Planner",
  description:
    "The Forestry Catchment Planner is a web app designed to improve environmental management within the forestry sector.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
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
