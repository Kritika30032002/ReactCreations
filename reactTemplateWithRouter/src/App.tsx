import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as layouts from './layout/index';
import 'bootstrap/dist/css/bootstrap.css';
// import {TextField, TextFieldTest} from "./components/field";



function App() {
  return (
    <BrowserRouter>

    <div className={"d-flex flex-column min-vh-100"}>
      <header>
      <layouts.Navigation />
      </header>

      <main className={"container-fluid flex-fill"}>
       <Switch>
         <Route path={"/about"} component={layouts.About} />
         <Route path={"/signup"} component={layouts.signup} />
         <Route exact path={['/', '/home']} component={layouts.Home} />
         <Route component={layouts.e404} />
       </Switch>
      </main>

      <footer><layouts.Footer /></footer>

    </div>

  </BrowserRouter>
      
  );
}

export default App;
