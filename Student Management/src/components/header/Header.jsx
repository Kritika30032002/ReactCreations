import React from 'react';
import './header.css';
import LOGO from '../../assets/logo.png';
const Header = () => {
  return (
    <div className="container header_container">
      <h2>Welcome to</h2> 
      <h1>AcadMix</h1>
      <div className="logo">
        <img src={LOGO} alt="logo_image" />

      </div>
      <div className="btns">
        <div><a href="#academics" className="btn">Academics</a></div>
        <div><a href="#technology" className="btn-primary">Technology</a></div>

      </div>
    </div>
  )
}

export default Header
