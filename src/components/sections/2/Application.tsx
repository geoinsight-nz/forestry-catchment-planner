import Image from "next-export-optimize-images/image";
import ApplicationText from "./ApplicationText";
import trees from "/public/images/forests/forest_trees_duotone.png";

export default function Application() {
  return (
    <section id="intro" className="flex items-center justify-center">
      <div className="grid h-full grid-cols-1 bg-background pb-14 dark:bg-brand-950 md:h-full md:grid-cols-2 md:pb-0">
        <div className="relative order-2 h-96 w-full md:order-1 md:h-full">
          <Image
            src={trees}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="order-2 h-fit px-6 py-6 md:order-1 md:h-full md:px-14 md:py-14">
          <ApplicationText />
        </div>
      </div>
    </section>
  );
}
