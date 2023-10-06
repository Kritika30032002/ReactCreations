import React, { useState } from 'react';
import styles from './stonepaper.module.css';

enum Choice {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

const Stonepaper: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);

  const choices = [Choice.Rock, Choice.Paper, Choice.Scissors];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handleChoice = (choice: Choice) => {
    const computer = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setGameResult('It\'s a tie!');
    } else if (
      (choice === Choice.Rock && computer === Choice.Scissors) ||
      (choice === Choice.Paper && computer === Choice.Rock) ||
      (choice === Choice.Scissors && computer === Choice.Paper)
    ) {
      setGameResult('You win!');
    } else {
      setGameResult('Computer wins!');
    }
  };

  return (
    <div className={styles.main}>

    
    <div className={styles.mainApp}>
      <h1>Rock, Paper, Scissors</h1>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className={styles.result}>
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{gameResult}</p>
        </div>
      )}
    </div></div>
  );
};

export default Stonepaper;
