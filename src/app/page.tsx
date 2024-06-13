import ClientSection from "@/components/landing/ClientSection";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <PricingSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
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
