import { FaSearch } from "react-icons/fa";
import "../styles/style.css";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(params) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center align-middle">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">
            <span className=" text-green-500">G</span>Event
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="space-x-4 flex mt-2">
            <Link
              to="/home"
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => scrollToSection("about-us")}
              className="text-white hover:text-green-500"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-green-500"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-green-500"
            >
              Portfolio
            </Link>
            <Link
              to="/pricing"
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-green-500"
            >
              Get Started
            </Link>
            <Link
              to="/contact-us"
              onClick={() => scrollToSection("contact-us")}
              className="text-white hover:text-green-500"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search events..."
              className="rounded-md p-2 mr-2 outline-none"
            />
            <button className="bg-white text-gray-800 p-2 rounded-md">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-white">
            {isOpen ? (
              <MdClose className="w-6 h-6  opacity-0" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 w-full bg-opacity-80 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <MdClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-start space-y-4 p-4">
            <Link
              to="/home"
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => scrollToSection("about-us")}
              className="text-white hover:text-green-500"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-green-500"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-green-500"
            >
              Portfolio
            </Link>
            <Link
              to="/pricing"
              onClick={() => scrollToSection("pricing")}
              className="text-white hover:text-green-500"
            >
              Get Started
            </Link>
            <Link
              to="/contact-us"
              onClick={() => scrollToSection("contact-us")}
              className="text-white hover:text-green-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
