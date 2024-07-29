import { BriefcaseBusinessIcon } from "lucide-react";

type Props = {
  experience: {
    year: string;
    title: string;
    company: string;
    description: string;
  };
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex items-start gap-x-12 relative">
      <div className="p-3 bg-[#fcbc30] rounded-full mx-auto relative z-10">
        <BriefcaseBusinessIcon className="size-6 text-white" />
      </div>
      <div className="absolute left-[24px] top-[72px] w-px bg-[#fcbc30] h-[calc(100%-72px)]" />

      <div>
        <p className="uppercase bg-gray-600/50 p-1 rounded-full px-4 inline-block">
          {experience.year}
        </p>
        <h2 className="uppercase text-xl md:text-2xl font-bold mt-4">
          {experience.title} -{" "}
          <span className="text-lg md:text-xl font-normal">
            {experience.company}
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base">{experience.description}</p>
      </div>
    </div>
  );
}
