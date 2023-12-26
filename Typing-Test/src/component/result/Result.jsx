import React from 'react'
import './result.css'
// import ReplayIcon from '@mui/icons-material/Replay';

function Result({handlerParent,wpm,correctWord}) {
      //Advice logic here
  var advice;
  if (wpm === 0) {
    advice = " ";
  } else if (wpm > 15 && wpm <= 35) {
    advice = "You are doing good keep practicing";
  } else if (wpm <= 15) {
    advice = "You need to practice hard";
  } else if(wpm>40 && wpm<=60){
    advice = "Your speed is above average.";
  }
  else {
    advice = "Excellent work";
  }
  return (
    <div>
              <button id="retry-btn" onClick={handlerParent}>Retry</button>
              <h4>
        Total Correct words:
        <span style={{ fontWeight: "bold",fontSize:'16px'}}> {correctWord.length}</span>
      </h4>

          <h4>
            Analyzing performance:{" "}
            <span style={{ fontWeight: "bold",fontSize:'16px'}}>{advice}</span>
          </h4>
    </div>
  )
}

export default Result