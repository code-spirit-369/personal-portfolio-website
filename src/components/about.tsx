import data from "@/data.json";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 max-w-7xl mx-auto">
      <h1 className="uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
        About <span className="text-[#fcbc30]">Me</span>
      </h1>

      <div className="mt-12 md:mt-32">
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <div>
              <h2 className="uppercase font-semibold text-3xl xl:text-4xl">
                Personal Info
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    First Name:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.first_name}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Last Name:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.last_name}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Age:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.age} Years</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Nationality:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.nationality}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Freelance:{" "}
                  </p>
                  <p className="md:text-xl text-green-400">Available</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Location:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.location}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Phone:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.phone}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Email:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.email}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Github:{" "}
                  </p>
                  <p className="md:text-xl text-white">{data.github_handle}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="md:text-xl text-gray-400 font-semibold">
                    Languages:{" "}
                  </p>
                  <p className="md:text-xl text-white">
                    {data.languages.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="rounded-full uppercase font-semibold text-xl py-8 px-12 bg-transparent border border-[#fcbc30] hover:bg-[#fcbc30]"
                asChild
              >
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center space-x-4"
                >
                  <span>Download CV</span>
                  <DownloadIcon className="size-6" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className=" border border-gray-500/40 p-6 md:p-12 rounded-lg space-y-4">
              <p className="text-5xl md:text-7xl text-[#fcbc30] font-semibold">
                {data.years_of_experience}+
              </p>
              <p className="uppercase text-xs md:text-2xl">
                Years of Experience
              </p>
            </div>

            <div className=" border border-gray-500/40 p-6 md:p-12 rounded-lg space-y-4">
              <p className="text-5xl md:text-7xl text-[#fcbc30] font-semibold">
                {data.projects_completed}+
              </p>
              <p className="uppercase text-xs md:text-2xl">
                Projects Completed
              </p>
            </div>

            <div className=" border border-gray-500/40 p-6 md:p-12 rounded-lg space-y-4">
              <p className="text-5xl md:text-7xl text-[#fcbc30] font-semibold">
                {data.happy_customers}+
              </p>
              <p className="uppercase text-xs md:text-2xl">Happy Customers</p>
            </div>

            <div className=" border border-gray-500/40 p-6 md:p-12 rounded-lg space-y-4">
              <p className="text-5xl md:text-7xl text-[#fcbc30] font-semibold">
                {data.awards_gained}+
              </p>
              <p className="uppercase text-xs md:text-2xl">Awards Gained</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
