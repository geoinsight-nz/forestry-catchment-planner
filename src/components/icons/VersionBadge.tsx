import TextShimmer from "@/components/effects/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function VersionBadge() {
  return (
    <div className="backdrop-filter-[12px] group inline-flex h-7 translate-y-[-1rem] animate-fade-in items-center justify-between gap-1 rounded-full border border-black/25 bg-white/10 px-3 text-xs text-foreground opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:border-white/5 dark:text-black">
      <TextShimmer className="inline-flex items-center justify-center">
        <a href="https://catchment.maphq.co.nz" target="_blank" rel="noopener">
          Forestry Catchment Planner v1.0 release
        </a>{" "}
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </TextShimmer>
    </div>
  );
}
