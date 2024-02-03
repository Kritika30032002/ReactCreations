import React from 'react'
import styled from "styled-components";
import tv from '../assets/tv.png'
import tv_video from '../assets/video-tv-in-0819.mp4'
function enjoy() {
  return (
    <>
    <Container1>
      <div className="y1">
        <h1 className="y2">
            Enjoy your TV
        </h1>
        <p className="y3">
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </p>
      </div>
      <div className="y4">
        <img src={tv} alt="" className="y5" />
        <video src={tv_video} autoPlay loop muted playsInline className='y6'></video>
      </div>
    </Container1>
    </>
  )
}

const Container1 = styled.div`
background-color: black;
border-bottom:0.5rem solid grey;
height:500px;
width:100vw;
.y1{
    width:60vw;
    height:490px;
    display:inline-block;
    position:relative;
    top:-455px;
    left:37px;
}
.y2{
    color:white;
    font-size:3rem
}
.y3{
    color:white;
    font-size:1.5rem;
}
.y4{
   display:inline-block;
   width: 40vw;
   height:490px;
}
.y5{
    background-size:cover;
    z-index:20;
}
.y6{
    position:relative;
    top:-386px;
    left:74px;
    z-index:10;
}
`;

export default enjoy
