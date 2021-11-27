import ProjectCard from "./ProjectCard";

const MyWork = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center w-full bg-indigo-50 px-5"
    >
      <div className="font-bold text-7xl pb-6">
        check out my <span className="text-green-700">work</span>.
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:justify-items-center lg:flex lg:flex-row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default MyWork;
