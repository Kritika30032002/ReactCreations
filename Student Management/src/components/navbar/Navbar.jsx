import React from "react";
import { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Navbar = () => {
  const [click, setClick] = useState("#");
  return (
    <div className="navbar_container">
      <a
        onClick={() => setClick("#")}
        className={click === "#" ? "active" : ""}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setClick("#contact")}
        className={click === "#contact" ? "active" : ""}
        href="#contact"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setClick("#testimonials")}
        className={click === "#testimonials" ? "active" : ""}
        href="#academics"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setClick("#about")}
        className={click === "#about" ? "active" : ""}
        href="#technology"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setClick("#Footer")}
        className={click === "#Footer" ? "active" : ""}
        href="#Footer"
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Navbar;
