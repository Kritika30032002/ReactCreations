import React, { useState, useEffect } from 'react';
import './App.css';
import questions from './quizData'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userSelections, setUserSelections] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(30);
  const [result, setResult] = useState('');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        moveToNextQuestion();
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  const handleOptionChange = (event) => {
    const updatedSelections = [...userSelections];
    updatedSelections[currentQuestion] = event.target.value;
    setUserSelections(updatedSelections);
  };

  const checkAnswer = () => {
    const selectedAnswer = userSelections[currentQuestion];
    const currentQuestionData = questions[currentQuestion];

    if (selectedAnswer === currentQuestionData.correctAnswer) {
      setScore(score + 1);
      setResult('correct');
    } else {
      setResult('wrong');
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
      setResult('');
    } else {
      setQuizCompleted(true);
    }
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimer(30);
      setResult('');
    }
  };

  const finishQuiz = () => {
    setQuizCompleted(true);
  };

  const renderQuiz = () => {
    if (currentQuestion < questions.length) {
      return (
        <div className="question-container">
          <p className="display-5">{questions[currentQuestion].question}</p>
          <ul className="options-list">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
              <li className="option-item">
                <label className='fs-5'>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    onChange={handleOptionChange}
                    checked={userSelections[currentQuestion] === option}
                  />
                  &nbsp; &nbsp; &nbsp;
                  {option}
                </label>
              </li>
              <br></br>
              </div>
            ))}
          </ul>
          <div className="d-flex justify-content-center bg-danger"><div className="text-white">Time Remaining: {timer} seconds</div></div>
          <br></br>
          <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: `${((currentQuestion/questions.length)*100)}%`}}></div>
          </div>
          <br></br>
          <div className='d-flex justify-content-around'>
              <div>
              {result === '' && (
            <button className="check-answer-button" onClick={checkAnswer}>
              Check Answer
            </button>
          )}
              {result === 'correct' && <div className="result-mark">&#10004;</div>}
          {result === 'wrong' && <div className="result-mark">&#10006;</div>}
              </div>
              <div>
              <button className="back-button" onClick={moveToPreviousQuestion}>
            Back
          </button>
              </div>
              <div>
              <button className="next-button" onClick={moveToNextQuestion}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
              </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="result-container">
          <h2 className="result-heading">
            {quizCompleted ? 'Quiz Completed!' : 'Thanks for taking the quiz!'}
          </h2>
          {quizCompleted && (
            <p className="score-text">Your Score: {score} / {questions.length}</p>
          )}
        </div>
      );
    }
  };

  // return (
  //   <div className="App">
  //     <h1 className="quiz-title">Quiz App</h1>
  //     <div className="quiz">{renderQuiz()}</div>
  //   </div>
  // );
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Quiz App</span>
  </div>
</nav>
<div className='d-flex justify-content-center align-items-center quiz-container'>
  {renderQuiz()}
</div>
    </div>
  );
}

export default App;
