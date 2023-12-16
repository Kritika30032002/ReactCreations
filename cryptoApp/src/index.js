import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";
// const root = ReactDOM.createRoot();
ReactDOM.render(
  // <React.StrictMode>
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById("root")
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
