import React from "react";
import svg from "../wave.svg";
import "./Nav.css";
const Nav = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${svg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h1 style={{ fontSize: 24, textAlign: "center" }}>
        React Password Generator
      </h1>
      <p>Simple tool to generate strong passwords</p>
    </div>
  );
};

export default Nav;
