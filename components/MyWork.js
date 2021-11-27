import ProjectCard from "./ProjectCard";
import projectInfo from "../data/projectInfo";

const MyWork = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center w-full px-5 bg-white lg:h-screen"
    >
      <div className="pb-6 font-bold text-7xl">
        check out my <span className="text-green-700">work</span>.
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:items-start lg:justify-items-center lg:flex lg:flex-row">
        {projectInfo.map((item) => (
          <ProjectCard
            title={item.title}
            project={item.file}
            brief={item.brief}
            features={item.features}
            icon1={item.icon1}
            icon2={item.icon2}
            icon3={item.icon3}
            icon4={item.icon4}
          />
        ))}
      </div>
      <div className="py-10">More projects coming soon...</div>
    </div>
  );
};

export default MyWork;
