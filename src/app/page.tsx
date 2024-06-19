import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import ContextSection from "../components/landing/ContextSection";
import FeaturesSection from "../components/landing/FeaturesSection";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ContextSection />
      <FeaturesSection />
    </>
  );
}

// export default function HomePage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center">
//       <h2 className="font-sans text-sm text-black">
//         Forestry Catchment Planner
//       </h2>
//     </main>
//   );
// }
