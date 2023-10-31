import React, { useState, useEffect } from "react";

export function Quiz() {
  // State to store the questions and user-selected options
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalScore, setTotalScore] = useState(null);

  // Fetch questions from an API when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Function to fetch a new set of 5 questions
  const fetchQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&category=9")
      .then((res) => res.json())
      .then((data) => {
        // Initialize selectedOptions with null values for each question
        const initialSelectedOptions = data.results.map(() => null);
        setQuestions(data.results);
        setSelectedOptions(initialSelectedOptions);
        setTotalScore(null); // Reset the total score
      });
  };

  // Function to render the questions
  function renderQuestions() {
    if (questions.length === 0) {
      return <p>Loading questions...</p>;
    }

    return (
      <div>
        {questions.map((currentQuestion, index) => (
          <Question
            key={index}
            question={currentQuestion.question}
            options={[
              ...currentQuestion.incorrect_answers,
              currentQuestion.correct_answer,
            ]}
            questionNumber={index + 1}
            selectedOption={selectedOptions[index]}
            updateSelectedOption={(option) => handleOptionSelect(index, option)}
          />
        ))}
        <Submit />
      </div>
    );
  }

  // Submit component to check answers and restart the quiz
  function Submit() {
    function handleShowCorrectOptionsClick() {
      // Calculate the total correct options count
      const totalCorrectOptions = questions.reduce(
        (count, currentQuestion, index) =>
          currentQuestion.correct_answer === selectedOptions[index]
            ? count + 1
            : count,
        0
      );
      setTotalScore(totalCorrectOptions);
    }

    function handleRestartClick() {
      // Reset the quiz by clearing selected options and fetching new questions
      setSelectedOptions([]);
      fetchQuestions();
    }

    return (
      <div>
        <button className="start--quiz" onClick={handleShowCorrectOptionsClick}>
          Check Answers
        </button>
        <br />
        {totalScore !== null && (
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "20px",
              font: "arial"
            }}
          >You scored {totalScore}/5 correct answers</p>
        )}
        <br />
        <button
          style={{
            float: "right"
          }}
          className="start--quiz" onClick={handleRestartClick}>
          Restart Quiz
        </button>
        <br />
      </div>
    );
  }

  // Function to handle option selection for a specific question
  function handleOptionSelect(questionIndex, option) {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      updatedOptions[questionIndex] = option;
      return updatedOptions;
    });
  }

  return (
    <div>
      <div className="quiz--question">{renderQuestions()}</div>
    </div>
  );
}

// Question component to display a single question
function Question({
  question,
  options,
  questionNumber,
  selectedOption,
  updateSelectedOption,
}) {
  const handleOptionClick = (option) => {
    if (selectedOption === null || selectedOption !==  option) {
      updateSelectedOption(option);
    } 
    else if (selectedOption === option) {
      // Deselect the option if it's already selected
      updateSelectedOption(null);
    }
  };

  return (
    <div>
      <h2>Question {questionNumber}</h2>
      <br />
      <p className="question">{question}</p>
      <br />
      <ul className="quiz--options">
        {options.map((option, optionIndex) => (
          <li
            key={optionIndex}
            style={{
              backgroundColor:
                selectedOption === option
                  ? "#D6DBF5"
                  : "",
              cursor: "pointer",
            }}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}
