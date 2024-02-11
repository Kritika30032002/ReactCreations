import React from "react";

import "./Repositories.css";
import Repository from "./Repository";

const Repositories = ({ repos, user }) => (
  <section className="repositories">
    {repos.map((repo) => (
      <Repository key={repo.id} repo={repo} user={user} />
    ))}
  </section>
);

export default Repositories;
