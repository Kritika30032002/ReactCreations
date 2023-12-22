import styles from "./HangManWord.module.css";

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangManWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangManWordProps) => {
  return (
    <div className={styles.hangManWordContainer}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className={styles.letter} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangManWord;
