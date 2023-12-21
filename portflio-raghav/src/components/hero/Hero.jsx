import "./Hero.scss"
import { delay, motion } from 'framer-motion';

const textVariants = {
    initial:{
        x: -500 ,
        opacity:0,

    },
    animate:{
        x:0,
        opacity:1,
        
        trasition:{
            duration:2,
            staggerChilden:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        repeat:Infinity,
        trasition:{
            duration:2,
            repeat:Infinity,
            
        }
    },
};

const Hero = () => {
  return (
    <div className='hero'> 

    <div className="wrapper">

        <motion.div className="textContainer" variants={textVariants}
        
            initial="initial"
            whileInView="animate"
            transition={{delay:0.5, type:"spring"}}
            
        >
            <motion.h2 variants={textVariants}>SHANTANU RAGHAV</motion.h2>
            <motion.h1 variants={textVariants}>MECHANICAL DESIGNER</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>See the Latest Works</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton"  src="/scroll.png" alt="" className="src" />
        </motion.div>
        </div>

        <div className="slidingTextContainer">
            ENGINEER MECHANICAL AUTOMATION DESIGNER
        </div>

        <div className="imageContainer">
            <img src="/hero.png" alt="" className="heroit" />
        </div>



    </div>
  )
}

export default Hero