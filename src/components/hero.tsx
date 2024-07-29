import Image from "next/image";

import data from "@/data.json";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col xl:flex-row items-center justify-center gap-8 overflow-hidden">
      <Image
        src="/images/portrait.jpg"
        alt="Portrait"
        width={1024}
        height={1024}
        className="rounded-full xl:rounded-2xl size-56 xl:size-[560px] object-cover border-4 border-[#4A4A4A] mx-auto"
      />

      <div className="mt-4 xl:mt-0 flex flex-col max-w-2xl mx-auto text-center xl:text-left gap-8">
        <h1 className="uppercase text-4xl xl:text-7xl font-bold text-[#fcbc30] leading-[48px]">
          I&apos;m {data.name}.
          <br />
          <span className="text-white">{data.role}</span>
        </h1>
        <p className="text-lg xl:text-2xl leading-7 xl:leading-10">
          {data.bio}
        </p>

        <div className="flex justify-center xl:justify-start">
          <Button
            className="rounded-full uppercase font-semibold text-xl py-8 px-12 bg-transparent border border-[#fcbc30] hover:bg-[#fcbc30]"
            asChild
          >
            <Link href="#about" className="flex items-center space-x-4">
              <span>More About Me</span>
              <ArrowRightIcon className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
