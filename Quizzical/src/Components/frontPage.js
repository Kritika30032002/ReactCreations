import React, { useState } from "react";
import { Quiz } from "./quizPage";

export function Front() {
  const [showQuiz, setShowQuiz] = useState(false);

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div>
      {showQuiz ? (
        <>
        <div className="top--blob"></div>
          <div className="bottom--blob"></div>
        <Quiz />
        </>
      ) : (
        <>
          <div className="quizzical">
            Quizzical
            <p>A test designed to test your General Knowledge!</p>
          </div>
          <br />
          <button className="start--quiz" onClick={startQuiz}>
            Start quiz
          </button>
          <div className="top--blob"></div>
          <div className="bottom--blob"></div>
        </>
      )}
    </div>
  );
}
