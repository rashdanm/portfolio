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
}) => {
  return (
    <div class="w-full md:w-96 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col m-8 border-2 border-green-700">
      <div class="xl:w-full md:w-full p-1">
        <div class="bg-white p-1 rounded-lg">
          {/* <img
            class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-2"
            src="https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg"
            alt="Image Size 720x400"
          /> */}
          <Image
            className=""
            src={`/images/projects/${project}.png`}
            alt="skillsLogo"
            height={350}
            width={700}
          />

          <h2 class="text-xl text-black title-font mb-2 font-bold">{title}</h2>
          <div class="w-1/2 flex justify-between">
            <Image
              className=""
              src={`/images/logos/${icon1}.png`}
              alt="skillsLogo"
              height={25}
              width={26}
            />
            <Image
              className=""
              src={`/images/logos/${icon2}.png`}
              height={25}
              width={26}
            />
            <Image
              className=""
              src={`/images/logos/${icon3}.png`}
              height={25}
              width={26}
            />
            <Image
              className=""
              src={`/images/logos/${icon4}.png`}
              height={25}
              width={26}
            />
          </div>
          <h5 className="mt-3 font-semibold text-green-700">Brief</h5>
          <p class="leading-relaxed text-base">{brief}</p>
          <h5 className="mt-3 font-semibold text-green-700">
            Features & Technology
          </h5>
          <p class="leading-relaxed text-base pb-5">{features}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
