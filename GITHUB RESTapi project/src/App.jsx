import axios from "axios";
import { useState, useEffect } from "react";
import Details from "./Details";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "./App.css";
import Home from "./Home";
function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <Home />

      <div style={{ padding: 20}} className="gagan-div">
        <Input
          placeholder="Search username"
          type="text"
          value={username}
          onChange={onChangeHandler}
        />

        <div className="search" >
          <a href="#Details">
            {/* <Button colorScheme="blue" type="submit" onClick={submitHandler}>
              Search
            </Button> */}
            <h2>click</h2>
          </a>
        </div>
      </div>

      <section id="Details">
        <Details data={data} repositories={repositories} />
      </section>
    </>
  );
}

export default App;
