import Sidebar from "../sidebar/Sidebar"
import "./Navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (  <div className='navbar'>


    <Sidebar/>


    <div className="wrapper">
        <motion.span

        initial={{opacity:0 , scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        
        >
          Raghav
          
          </motion.span>

        <div className="social">
            <a href="#" className="href"><img src="/public/facebook.png" alt="" className="src" /></a>
            <a href="#" className="href"><img src="/public/instagram.png" alt="" className="src" /></a>
            <a href="#" className="href"><img src="/public/youtube.png" alt="" className="src" /></a>
            <a href="#" className="href"><img src="/public/dribbble.png" alt="" className="src" /></a>

        </div>
    </div>
    

  </div>
  )
}

export default Navbar