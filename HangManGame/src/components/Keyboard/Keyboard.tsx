import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disable?: boolean;
};

const Keyboard = ({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
  disable = false,
}: KeyboardProps) => {
  return (
    <div className={styles.keyboardContainer}>
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);

        const isInActive = inActiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }
            `}
            disabled={isInActive || isActive || disable}
            key={index}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
