import React from 'react';
import './technology.css';
import { BsPatchCheckFill } from "react-icons/bs";

const List=[{icon:<BsPatchCheckFill/>,title:'frontend'},{icon:<BsPatchCheckFill/>,title:'html, css, js'},{icon:<BsPatchCheckFill/>,title:'react'},{icon:<BsPatchCheckFill/>,title:'backend'},{icon:<BsPatchCheckFill/>,title:'nodejs, expressjs, mongodb'}];
const Technology = () => {
  return (
    <section id="technology"className='container technology_container' >
      <h2>Welcome to </h2>
        <br></br>
      <h1>Technology Section</h1>
      <h5>Know Your Technologies...</h5>
      <div className="tech">
        <div className="webd">
          
          <div className="head">
          <h2>Web Dev</h2></div>
          {List.map(listItem=> <div className="l1">
          <BsPatchCheckFill className="icon1"/><h3>
          {listItem.title}</h3>
          </div>)}

        </div>
        <div className="blockc"></div>
        <div className="andr"></div>
      </div>



    </section>
  )
}

export default Technology
