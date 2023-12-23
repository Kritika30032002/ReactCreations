import React from 'react'
import "./Parallax.scss"
import { motion , useScroll , useTransform } from 'framer-motion'
const Parallax = ({ type }) => {



    // const ref = useRef();

    // const {scrollYProgress} = useScroll({
    //     target:ref
    // })
  return (

    <div className="parallax" 

    style={{background:type==="services" ? "linear-gradient(180deg , #111132 , #0c0c1d  )" 
            : "linear-gradient(180deg , #111132 , #505064)"

}}
    
    >
        <h1>{type==="services" ? "What We Do ?" : "What We did ?" } </h1>

        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  )
}

export default Parallax