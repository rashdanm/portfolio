import Image from "next/image";
import rashdan from "../assets/rashdan.jpg";
import Skill from "./Skill";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full px-5 pb-5 bg-white lg:justify-center lg:flex-row xl:h-screen"
    >
      <div className="flex flex-col justify-center mt-10 lg:w-1/2 lg:justify-start lg:pt-6 ">
        <div className="border-4 border-green-700 rounded-full w-96 h-96 ">
          <Image
            className="border-green-700 rounded-full"
            src={rashdan}
            alt="rashdan"
            width={700}
            height={700}
            objectFit="fill"
            objectPosition="center bottom"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 className="pb-6 font-bold pt-14 text-7xl">
          About{" "}
          <span className="text-green-700 transition ease-in duration-5000">
            me
          </span>
          ...
        </h2>
        {/* <h3 className="pb-4 font-semibold">...and the rode to code.</h3> */}
        <div className="pb-4 font-semibold">
          <Typewriter
            options={{
              autoStart: true,
              delay: 5000,
              loop: true,
              delay: 40,
              strings: [
                "...and the rode to code.",
                "...and the journey so far.",
              ],
            }}
          />
        </div>

        <p className="pb-4">
          Hi, I'm Rashdan and I'm a self taught developer from London. I
          previously worked in the education sector as a teacher, and whilst I
          still love teaching, I have now decided to follow my dream and pursue
          a career in programming.
        </p>
        <p className="pb-4">
          I've learnt to code using many platforms, including Codecademy, Udemy,
          Youtube and other resources such as Stack Overflow, and of course
          playing around with code, enduring countless hours and days of trial
          and error.
        </p>
        <p className="pb-4">
          Whilst most of my learning has been focused on the front-end, more so
          React, I'm always looking to improve and get more tools under my belt.
          Therefore, I'm more than open to learning new skills and technologies,
          whether it's on the back-end of development or even learning new
          framworks and languages.
        </p>
        <button class="p-2 pl-5 pr-5 pt-2 bg-transparent border-2 border-green-700 text-green-700 text-lg rounded-lg hover:bg-green-700 hover:text-gray-100 focus:border-4 focus:border-green-700 transition-color duration-300">
          <a
            href="/document.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </button>
        <h1 className="pt-10 text-xl font-semibold pb-7">Skills</h1>
        <div className="md:flex md:flex-row md:justify-between">
          <div>
            <Skill logo="reactjs" name="React" />
            <Skill logo="nextjs" name="Next JS" />
            <Skill logo="node" name="Node JS" />
            <Skill logo="javascript" name="Javascript" />
          </div>
          <div>
            <Skill logo="tailwindcss" name="Tailwind" />
            <Skill logo="sass" name="Sass" />
            <Skill logo="styledcomp" name="Styled Components" />
          </div>
          <div>
            <Skill logo="css" name="CSS" />
            <Skill logo="html" name="HTML" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
