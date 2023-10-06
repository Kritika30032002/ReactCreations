import React, { useState } from 'react';
import styles from './guesss.module.css';

const Guess: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setMessage('Please enter a valid number.');
      return;
    }

    if (guess === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (guess < targetNumber) {
      setMessage('Try a higher number.');
    } else {
      setMessage('Try a lower number.');
    }

    setAttempts(attempts + 1);
  }

  return (
    <div className={styles.main}>
    <div className={styles.app}>
      <h1>Guess the Number Game</h1>
      <p>Can you guess the number between 1 and 100?</p>
      <input
        type="number"
        placeholder="Enter your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <p className={styles.message}>{message}</p>
      <p className={styles.attempts}>Attempts: {attempts}</p>
    </div></div>
  );
};

export default Guess;
