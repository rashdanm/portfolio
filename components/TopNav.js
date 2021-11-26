import { Link } from "react-scroll";

const TopNav = () => {
  const navLinks = [
    { id: 1, navId: "home", navLink: "Home" },
    { id: 2, navId: "about", navLink: "About" },
    { id: 3, navId: "work", navLink: "My Work" },
    { id: 4, navId: "contact", navLink: "Contact" },
  ];
  return (
    <div className="bg-gray-100 md:w-10/12 hidden md:flex md:justify-end md:fixed m-0">
      {navLinks.map((link) => (
        <Link activeClass="active" to={link.navId} spy={true} smooth={true}>
          <div className="cursor-pointer hover:text-green-700 pl-6 py-4">
            {link.navLink}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopNav;
