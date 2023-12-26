import React, { useState, useRef } from "react";
import Result from "../result/Result";
import "./speedTester.css";

function SpeedTester() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);

  const ref = useRef(null);

  const wordCollection = [
    "Hospital",
    "Racism",
    "specialized",
    "Awesome",
    "Robotics",
    "Intellectual",
    "Isn't",
    "placeholder?",
    "technology",
    "generic",
    "something",
    "co-operative",
    "@gmail",
    "!okay",
  ];

  //on input change updating text state
  const changeHandler = (e) => {
    if (time < 30) {
      setText(e.target.value);
    }
  };

  //to reset the textarea content and making autofocus
  const resetHandler = () => {
    setText("");
    setTime(0);
    ref.current.focus();
  };

  //time calculation logic
  if (text.length > 0) {
    if (time < 30) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }

  //wpm and word formula and condition
  var i, j;
  var k = 0;
  var wpm;
  var userWord = [];
  var correctWord = [];
  if (text === "" || time === 0) {
    wpm = 0;
  } else {
    userWord = text.split(" ");

    //using loop to compare userWord and wordCollecion
    //that will save correct word to correctWord array
    for (i = k; i <= userWord.length; i++) {
      console.log("Outer loop running")
      for (j = 0; j < wordCollection.length; j++) {
        console.log("Inner loop running")
        if (userWord[i] === wordCollection[j]) {
          correctWord[k] = userWord[i];
          k += 1;
        }
      }
    }
    console.log(correctWord);
    wpm = Math.ceil(correctWord.length / (time / 60));
  }

  return (
    <>
      <div className="speedTester">
        <h3 style={{ textDecoration: "underline"}}>
          {" "}
          Words are displayed according to your level
        </h3>
        <div className="writingContent">
          {wordCollection.map((word, index) => (
            <b>
              <span style={{ color: "green", fontSize: "20px" }}>{word}</span>
            </b>
          ))}
        </div>
        <div className="start_time">
          {time > 0 ? (
            <span style={{ fontWeight: "bold", fontSize: "55px" }}>
              {" "}
              {time}
            </span>
          ) : (
            <h4>start typing to check your speed:</h4>
          )}
        </div>
        <div className="inputTxtarea">
          <textarea
            ref={ref}
            name=""
            id="txtarea"
            cols="70"
            rows="10"
            value={text}
            onChange={changeHandler}
            autoFocus
          ></textarea>
        </div>

        {time >0 ? (
          <div className="st-bottom">
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {" "}
              {wpm}wpm
            </span>
          </div>
        ) : (
          " "
        )}
      </div>
      {time === 30 ? (
        <Result
          handlerParent={resetHandler}
          wpm={wpm}
          correctWord={correctWord}
        />
      ) : (
        " "
      )}
    </>
  );
}

export default SpeedTester;
