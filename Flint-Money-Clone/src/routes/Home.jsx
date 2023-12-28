import Shades from "../components/Shades";
import Form from "../components/Form";
import Content from "../components/Content";
import Intro from "../components/Intro";

import { contentDetails } from "../data";
import Features from "../components/Features";
import Images from "../components/Images";

const Home = () => {
  return (
    <>
      <Intro 
        content = {<Content details={contentDetails[0]} />}
        shades = {<Shades />}
        images = {<Images />}
        form = {<Form />}
      />
      <Features />
    </>
  )
}

export default Home