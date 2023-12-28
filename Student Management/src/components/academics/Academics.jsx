import React from 'react';
import './academics.css';
import { FiUsers } from "react-icons/fi";
const Academics = () => {
  return (
    <section id='academics' class='container academics_container'>
        <h2>Welcome to </h2>
        <br></br>
      <h1>Academic Section</h1>
      <div className="contents">
        
        <div className="branch">
            <FiUsers className='icon'/>
            <a href="/compa.jsx">COMP A</a>
        </div>
        <div className="branch">
        <FiUsers className='icon'/>
            <a href="compb.jsx">COMP B</a>
        </div>
        <div className="branch">
        <FiUsers className='icon'/>
            <a href="it.jsx">IT</a>
        </div>
        <div className="branch">
        <FiUsers className='icon'/>
            <a href="entca.jsx">ENTC A</a>
        </div>
        <div className="branch">
        <FiUsers className='icon'/>
            <a href="entcb.jsx">ENTC B</a>
        </div>
        <div className="branch">
        <FiUsers className='icon'/>
            <a href="mech.jsx">MECH</a>
        </div>
        
      </div>
    </section>
  )
}

export default Academics
