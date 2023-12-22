import Navbar from '../Navbar/Navbar'
import './About.css'
import Reviews from './Review'



const About = () => {
  return (
    
    <>

    <div className='Aboutpage'>

       <div className="top-bar"> <Navbar/></div>


       <div className="aboutbut">

        <h2> What We Exactly Do !</h2>

        <div className="box">

          <Reviews/>



            


        </div>
       </div>













    </div>
    
    
    </>
  )
}

export default About