import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const HomeScreen = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center w-full h-screen bg-white lg:px-20"
    >
      <div className="px-5 py-3 font-bold text-7xl">
        Hello, {`I'm`}{" "}
        <span className="inline-block text-green-700">Rashdan</span>.
      </div>

      <div className="px-5 text-lg">
        <Typewriter
          options={{
            autoStart: true,
            delay: 5000,
            loop: true,
            delay: 40,
            strings: "A self taught front end developer based in London, UK.",
          }}
        />
      </div>

      <div className="flex px-5 pt-6">
        <div className="pr-3 hover:text-red-700">
          <a
            href="https://www.linkedin.com/in/rashdan-muhammad-581316227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="text-black duration-300 cursor-pointer fill-current hover:text-green-700 transition-color"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rashdanm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="text-black duration-300 cursor-pointer fill-current hover:text-green-700 transition-color"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="pt-10">
        <Link activeClass="active" to="work" spy={true} smooth={true}>
          <button className="py-3 pl-4 pr-6 ml-5 text-lg text-green-700 duration-300 bg-transparent border-2 border-green-700 rounded-lg hover:bg-green-700 hover:text-gray-100 focus:border-4 focus:border-green-700 transition-color md:hover:animate-bounce">
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
