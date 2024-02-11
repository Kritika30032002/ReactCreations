import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserPage from "./containers/UserPage";

import "./App.css";

function App() {
  const username = prompt("Enter Github Username");
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   if (username) setUsername(prompt("Enter github username"));
  // }, [username]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
