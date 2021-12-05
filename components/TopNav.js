import { Link } from "react-scroll";

const TopNav = () => {
  const navLinks = [
    { id: 1, navId: "home", navLink: "Home" },
    { id: 2, navId: "about", navLink: "About" },
    { id: 3, navId: "work", navLink: "My Work" },
    { id: 4, navId: "contact", navLink: "Contact" },
  ];
  return (
    <div className="">
      <div className="z-50 hidden pr-5 m-0 bg-white md:w-full md:flex md:justify-end md:fixed">
        {navLinks.map((link) => (
          <Link activeClass="active" to={link.navId} spy={true} smooth={true}>
            <div className="py-4 pl-6 font-semibold cursor-pointer hover:text-green-700 ">
              {link.navLink}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
