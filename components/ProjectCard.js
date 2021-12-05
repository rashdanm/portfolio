import Image from "next/image";

const ProjectCard = ({
  title,
  project,
  brief,
  features,
  icon1,
  icon2,
  icon3,
  icon4,
  website,
  code,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-4 bg-white border-4 border-green-700 rounded-lg shadow-lg md:w-96 md:m-8">
      <div className="p-1 xl:w-full md:w-full">
        <div className="p-1 bg-white rounded-lg">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-lg cursor-pointer hover:animate-pulse"
              src={`/images/projects/${project}.png`}
              alt="skillsLogo"
              height={400}
              width={700}
              layout="responsive"
              priority
            />
          </a>
          <div className="flex justify-start">
            <div className="flex items-center justify-center w-1/3 py-1 my-3 mr-2 text-white duration-300 bg-green-700 border-2 border-green-700 rounded-lg cursor-pointer py-2border-3 md:hover:animate-bounce">
              <a
                className=""
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                view
              </a>
            </div>

            <div className="flex items-center justify-center w-1/3 py-1 my-3 mr-2 text-white duration-300 bg-green-700 border-2 border-green-700 rounded-lg cursor-pointer py-2border-3 md:hover:animate-bounce">
              <a
                className=""
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>
            </div>
          </div>

          <h2 className="mb-2 text-xl font-bold text-black title-font">
            {title}
          </h2>
          <div className="flex justify-between w-1/2">
            <Image
              className="hover:animate-spin"
              src={`/images/logos/${icon1}.png`}
              alt="skillsLogo"
              height={25}
              width={26}
              priority
            />
            <Image
              className="hover:animate-spin"
              src={`/images/logos/${icon2}.png`}
              height={25}
              width={26}
              priority
            />
            <Image
              className="hover:animate-spin"
              src={`/images/logos/${icon3}.png`}
              height={25}
              width={26}
              priority
            />
            <Image
              className="hover:animate-spin"
              src={`/images/logos/${icon4}.png`}
              height={25}
              width={26}
              priority
            />
          </div>
          <h5 className="mt-3 font-semibold text-green-700">Brief</h5>
          <p className="text-base leading-relaxed">{brief}</p>
          <h5 className="mt-3 font-semibold text-green-700">
            Technology & Tools
          </h5>
          <p className="pb-5 text-base leading-relaxed">{features}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
