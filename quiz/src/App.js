import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Earth', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: 'How many continents are there on Earth?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '7',
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'F. Scott Fitzgerald'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'In which year did Christopher Columbus discover America?',
      options: ['1492', '1520', '1455', '1510'],
      correctAnswer: '1492',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Hg'],
      correctAnswer: 'Au',
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Hydrogen', 'Nitrogen'],
      correctAnswer: 'Carbon Dioxide',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Korea', 'Japan', 'Thailand'],
      correctAnswer: 'Japan',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Jupiter', 'Earth', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which animal is known as the "King of the Jungle"?',
      options: ['Giraffe', 'Tiger', 'Lion', 'Hippopotamus'],
      correctAnswer: 'Lion',
    },
    {
      question: 'How many bones are there in the adult human body?',
      options: ['206', '213', '195', '222'],
      correctAnswer: '206',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Rembrandt'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'Which gas is known as "Laughing Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrous Oxide', 'Helium'],
      correctAnswer: 'Nitrous Oxide',
    },
  ]);

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
          <p className="question-text">{questions[currentQuestion].question}</p>
          <ul className="options-list">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="option-item">
                <label>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    onChange={handleOptionChange}
                    checked={userSelections[currentQuestion] === option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div className="timer">Time Remaining: {timer} seconds</div>
          {result === '' && (
            <button className="check-answer-button" onClick={checkAnswer}>
              Check Answer
            </button>
          )}
          {result === 'correct' && <div className="result-mark">&#10004;</div>}
          {result === 'wrong' && <div className="result-mark">&#10006;</div>}
          <button className="back-button" onClick={moveToPreviousQuestion}>
            Back
          </button>
          <button className="next-button" onClick={moveToNextQuestion}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
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

  return (
    <div className="App">
      <h1 className="quiz-title">Quiz App</h1>
      <div className="quiz">{renderQuiz()}</div>
    </div>
  );
}

export default App;
