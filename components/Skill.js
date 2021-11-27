import Image from "next/image";

const Skill = ({ logo, name }) => {
  return (
    <div className="flex align-center pb-4">
      <Image
        className=""
        src={`/images/logos/${logo}.png`}
        alt="skillsLogo"
        height={25}
        width={26}
      />
      <span className="text-black pl-3">{name}</span>
    </div>
  );
};

export default Skill;
