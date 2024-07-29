import Image from "next/image";
import Link from "next/link";

type Props = {
  project: {
    imageUrl: string;
    title: string;
    url: string;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full h-full"
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={1920}
        height={1080}
        className="w-full h-full object-contain mx-auto rounded-2xl"
      />
      <div className="absolute inset-0 bg-[#fcbc30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-2xl cursor-pointer">
        <p className="uppercase font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
          {project.title}
        </p>
      </div>
    </Link>
  );
}
