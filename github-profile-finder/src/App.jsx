/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("pritam1136");
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName.trim()}`);
    const data = await res.json();
    if (data) {
      setuserData(data);
      setLoading(false);
      setUserName(" ");
    }
    console.log(data);
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data. please wait.......</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="github-username"
          placeholder="Search......"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <button className="button" onClick={handleSubmit}>
        Search
      </button>
      {userData === null ? null : <Card user={userData} />}
    </div>
  );
}

export default App;
