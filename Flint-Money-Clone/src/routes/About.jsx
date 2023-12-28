import Shades from "../components/Shades";
import Content from "../components/Content";
import Intro from "../components/Intro";

import { contentDetails } from "../data";
import Partners from "../components/Partners";

const About = () => {
  return (
    <>
      <Intro 
        content = {<Content details={contentDetails[1]} />}
        shades = {<Shades />}
      />
      <Partners />
    </>
  )
}

export default About;