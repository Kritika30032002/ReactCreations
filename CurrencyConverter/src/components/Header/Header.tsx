import React from "react";
import { heading } from "../../config/api";
import "./index.css"

function Header() {
  return (
    <div className="currency-header">
      <div>{heading}</div>
    </div>
  );
}

export default Header;
