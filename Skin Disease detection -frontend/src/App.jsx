import { useState } from "react";
import SignUp from "./components/LOGIN/register/Signup";
import Login from "./components/LOGIN/login/Login";

import Home from "./components/Home/Home";
import AboutUs from "./components/ABOUT/About"
import VC from "./components/vc/vc2"
import Contact from "./components/contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/vc" element={<VC/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;