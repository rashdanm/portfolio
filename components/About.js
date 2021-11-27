import Image from "next/image";
import rashdan from "../assets/rashdan.jpg";
import Skill from "./Skill";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col w-full lg:justify-center lg:flex-row bg-white px-5 pb-5"
    >
      <div className="flex flex-col justify-center mt-10 lg:w-1/2">
        <div className="">
          <Image
            className="rounded-full border-2 border-green-700"
            src={rashdan}
            alt="rashdan"
            width={350}
            height={350}
            objectFit="contain"
            objectPosition="center bottom"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 className="pt-14 pb-6 font-bold text-7xl">
          About{" "}
          <span className="text-green-700 transition ease-in duration-5000">
            me
          </span>
          ...
        </h2>
        <h3 className="pb-4 font-semibold">...and the journey so far.</h3>
        <p className="pb-4">
          Hi my name's Rashdan and I'm a self taught developer from London. I
          previously worked in the education sector as a teacher and decided to
          pursue a career in programming.
        </p>
        <p className="pb-4">
          I've learnt to code using platforms such as Youtube, Udemy, Codecademy
          and of course, playing around with code, enduring coutless hours and
          days of trial and error.
        </p>
        <p className="pb-4">
          Whilst most of my learning has been focused on the front-end, more so
          React, I am more than open to learning new skills and technologies,
          whether it's on the back-end of development or even learning new
          framworks and languages.
        </p>
        <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-700 text-green-700 text-lg rounded-lg hover:bg-green-700 hover:text-gray-100 focus:border-4 focus:border-green-700">
          <a
            href="/document.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </button>
        <h1 className="pt-6 pb-5 text-xl font-semibold">Skills</h1>
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
