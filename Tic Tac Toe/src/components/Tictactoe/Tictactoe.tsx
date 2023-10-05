import React, { useState } from 'react';
import Confetti from 'react-confetti';
import styles from './tictactoe.module.css';

type Player = 'X' | 'O' | null;

const Tictactoe: React.FC = () => {
  const [board, setBoard] = useState<Array<Player | null>>(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const winner = calculateWinner(board);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = nextPlayer;
    setBoard(newBoard);
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');

    if (!winner) {
      if (newBoard.every((square) => square !== null)) {
        setShowConfetti(true); 
      }
    }
  };

  const renderSquare = (index: number) => (
    <button className={styles.square} onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square !== null)
    ? "No winner"
    : `Next player: ${nextPlayer}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setNextPlayer('X');
    setShowConfetti(false); 
  };

  return (
    <div className={styles.fullMain}>
 <div className={styles.game}>
        <div className={styles.gameBoard}>
          <div className={styles.status}>{status}</div>
          <div className={styles.boardRow}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          {winner && showConfetti && <Confetti />}
          <button className={styles.playAgainButton} onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<Player | null>): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Tictactoe;
