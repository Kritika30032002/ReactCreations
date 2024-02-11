import React from "react";

import "./NavBar.css";

const Navbar = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <img
      src={user.avatar_url}
      width="50"
      height="50"
      className="mr-3 avatar"
      alt="user"
    />
    <h3 style={{ color: "white" }}>{user.name}</h3>

    <img src="../../../public/logo.png" alt="" />

    <a className="ml-auto d-flex align-items-center" href="/">
      Search Other User
    </a>
  </nav>
);

export default Navbar;
