import data from "@/data.json";
import { SkillProgress } from "@/components/skill-progress";

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden p-10 max-w-7xl mx-auto">
      <h1 className="uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
        My <span className="text-[#fcbc30]">Skills</span>
      </h1>

      <div className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.skills.map((skill, index) => (
          <SkillProgress key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
