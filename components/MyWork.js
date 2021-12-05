import ProjectCard from "./ProjectCard";
import projectInfo from "../data/projectInfo";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center w-full px-5 pt-6 bg-white lg:pt-5"
    >
      <div className="pb-6 font-bold text-7xl sm:pt-20 md:pt-28 lg:pt-24">
        check out my <span className="text-green-700">work</span>.
      </div>
      <div className="flex flex-col items-center justify-center w-full xl:items-start xl:justify-items-center xl:flex xl:flex-row">
        {projectInfo.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <ProjectCard
              key={item.id}
              title={item.title}
              project={item.file}
              brief={item.brief}
              features={item.features}
              icon1={item.icon1}
              icon2={item.icon2}
              icon3={item.icon3}
              icon4={item.icon4}
              website={item.website}
              code={item.code}
            />
          </motion.div>
        ))}
      </div>

      {/* <div className="py-10">More projects coming soon...</div> */}
      <div className="py-10">
        <Typewriter
          options={{
            autoStart: true,
            start: 3000,
            loop: false,
            strings: "More projects coming soon...",
          }}
        />
      </div>
    </div>
  );
};

export default MyWork;
