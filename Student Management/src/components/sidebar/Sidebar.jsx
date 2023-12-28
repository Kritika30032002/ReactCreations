import React from 'react'
import './sidebar.css';
import { BsPatchCheckFill } from "react-icons/bs";
import TT from '../../assets/timetable.pdf';

const List=[{title:'Recent Updates'},{title:'Notes'},{title:'Decodes'}];
const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className="sidebar_container" id='first'>
        <h3 className='acad'>Academics</h3>
        <ul className='ul_itis'>
          <li> <a href={TT}download><BsPatchCheckFill/> Timetable</a></li>
          {List.map(listItems=><li> <a href="#"><BsPatchCheckFill/> {listItems.title}</a></li>)};
        </ul>
        
      </div>
     
      <div className="sidebar_container " id="second">
        <h3></h3>
      </div>
    </section>
  )
}

export default Sidebar
