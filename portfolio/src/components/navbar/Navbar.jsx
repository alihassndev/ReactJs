import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed w-full top-0 shadow-lg z-50 bg-[#11082c]">
        <div className="flex w-[80vw] mx-auto justify-between items-center h-20">
          <div className="text-2xl font-semibold">
            <a href="/">Ali Hassan</a>
          </div>
          {/* Desktop Menu */}
          <div>
            <ul
              id="menu"
              className="hidden lg:flex justify-center items-center gap-10"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#work">Work Experience</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <a
                className="border py-1.5 px-4 rounded-lg bg-purple-600 text-white border-purple-600 hover:bg-transparent transition-all duration-300"
                href="mailto:alihassndev@gmail.com"
                target="_blank"
              >
                Hire Me
              </a>
            </ul>
          </div>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              <i className="ri-menu-4-line bg-purple-600 p-2 rounded-md"></i>
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[50%] bg-[#11082c] shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-2xl font-semibold">
              <a href="/">Ali Hassan</a>
            </div>
            <button onClick={toggleMenu} className="text-2xl">
              <i className="ri-close-line p-2 rounded-md bg-purple-600"></i>
            </button>
          </div>
          <ul className="flex flex-col items-start justify-center gap-10 mt-6 p-6">
            <li>
              <a href="/" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#work" onClick={toggleMenu}>
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact Me
              </a>
            </li>
            <a
              className="border py-2 px-4 rounded-lg bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:text-white transition-all duration-300 w-full text-center"
              href="mailto:alihassndev@gmail.com"
              onClick={toggleMenu}
            >
              Hire Me
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
