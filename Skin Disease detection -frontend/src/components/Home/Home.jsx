import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


function Home(){

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "aqua",
      mixBlendMode: "difference",
      fontWeight: "bold",
    }
   
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");






  return (
    <>



    
    <div className='HomePage'>

    <div className="Ani">
     
     

      <div><Navbar/></div>

      <div className="HomeBottom">
        
      <div  className='bottomtext'><div  onMouseEnter={textEnter} onMouseLeave={textLeave} className='quote'> "Skin diseases affect millions globally, and the lack of access to dermatological care in resource-poor regions remains a challenge. Technology, such as AI-based tools, can bridge this healthcare gap and improve health outcomes."</div>
      <br></br>
      <div className="saidby"><b>~ WHO Director-General Dr. Tedros Adhanom Ghebreyesus</b></div>
      
      </div>

      <div >
        
        <img className='imgbottom1'src="/asset/sathi1.jpg" alt="" />
        
        
        
        </div>
    </div>

    
    <div className="virtual">

      <Link to='/vc'>
      <button className='consult'>
        
         VIRTUAL CONSULTANT
      </button>
         
         </Link> 

    </div>

    <motion.div
       className='cursor'
       variants={variants}
       animate={cursorVariant}
     />
     
   </div>
    </div>

    </>
  )
}

export default Home
