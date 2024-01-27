import { useRef, useEffect } from "react";
// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import * as faceapi from "face-api.js";

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // FOR EMOTION DETECT
  // const [emotion, setEmotion] = useState("");
  // const [emotionProb, setEmotionProb] = useState(0);

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // LOAD MODELS FROM FACE API

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      // DETECT YOUR EMOTION AND SET THE EMOTION STATE WHICH HAS THE HIGHEST PROBABILITY
      // const _emotionProb = detections[0].expressions;
      // const _emotion = Object.keys(_emotionProb).reduce((a, b) =>
      //   _emotionProb[a] > _emotionProb[b] ? a : b
      // );
      // setEmotion(_emotion);
      // setEmotionProb(_emotionProb[_emotion].toFixed(3));

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      faceapi.matchDimensions(canvasRef.current, {
        width: 800,
        height: 500,
      });

      const resized = faceapi.resizeResults(detections, {
        width: 800,
        height: 500,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    }, 50);
  };

  // const toastInfo = () => {
  //   toast.info('This Emotion Detector App is made using Vite + ReactJS and Face API JS Library.');
  //   toast.info('Thankyou for using this app. Have a nice day !');
  // };

  return (
    <div className="myapp">
      <h1>✨ Emotion Detector ✨</h1>

      <div className="appvideo">
        <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
      </div>
      <canvas ref={canvasRef} width="800" height="500" className="appcanvas" />

      {/* <div className="emotion">
        <h2>Your Emotion is {emotion}</h2>
        <h2>Probability is {emotionProb}</h2>
      </div> */}

      {/* <h3><button class="button-33" role="button" onClick={toastInfo}>Know More !</button></h3> */}

      <footer>Made with ❤️ by <a href="https://soumyadev-portfolio-1.netlify.app/" target="_blank" rel="noreferrer">Soumyadev's Creations</a> &copy; 2024</footer>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

    </div>
  );
}

export default App;
