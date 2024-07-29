import data from "@/data.json";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 max-w-7xl mx-auto">
      <h1 className="uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Projects</span>
      </h1>

      <div className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
