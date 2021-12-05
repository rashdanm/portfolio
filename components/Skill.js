import Image from "next/image";

const Skill = ({ logo, name }) => {
  return (
    <div className="flex pb-4 align-center">
      <Image
        className="hover:animate-spin"
        src={`/images/logos/${logo}.png`}
        alt=""
        height={25}
        width={26}
      />
      <span className="pl-3 text-black">{name}</span>
    </div>
  );
};

export default Skill;
