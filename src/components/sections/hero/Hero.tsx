"use client";

import Image from "next/image";

import ipad from "/public/images/mockups/ipad_pro_1.png";
import mac from "/public/images/mockups/pro_display_xdr_mockup_2x.png";

export default function Hero() {
  return (
    <div className="relative mt-[6rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50">
      <div className="relative mx-auto h-full max-w-4xl">
        <Image
          src={mac}
          alt="FCP"
          sizes="100vw"
          className="relative hidden h-full w-auto rounded-[inherit] object-contain dark:block"
        />
        <Image
          src={mac}
          alt="FCP"
          sizes="100vw"
          className="relative block h-full w-auto rounded-[inherit] object-contain dark:hidden"
        />
        <Image
          src={ipad}
          alt="iPad"
          sizes="100vw"
          className="absolute bottom-0 right-0 max-w-[32vw] translate-x-[2rem] px-4 brightness-95 md:max-w-[24vw]"
        />
      </div>
    </div>
  );
}
