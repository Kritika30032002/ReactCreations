import React from "react";

import "./Tabs.css";

const Tabs = ({ repos, user }) => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <p className="nav-link mb-0 active">Repositories {repos.length}</p>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href={`https://github.com/${user.login}?tab=packages`}
      >
        Packages
      </a>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href={`https://github.com/orgs/${user.login}/people`}
      >
        People
      </a>
    </li>
    <li className="nav-item">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link mb-0"
        href={`https://github.com/${user.login}?tab=projects`}
      >
        Projects
      </a>
    </li>
  </ul>
);

export default Tabs;
