import React from "react";

import spinner from "../../spinner.gif";
import "./Loading.css";

const Loading = () => (
  <div className="loading">
    <img src={spinner} alt="loading" />
  </div>
);

export default Loading;
