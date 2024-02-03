import styles from "./HangManDrawing.module.css";

const manHead = <div className={styles.manHead}></div>;
const manBody = <div className={styles.manBody}></div>;
const manLeftHand = <div className={styles.manLeftHand}></div>;
const manRightHand = <div className={styles.manRightHand}></div>;
const manLeftLeg = <div className={styles.manLeftLeg}></div>;
const manRightLeg = <div className={styles.manRightLeg}></div>;

const HANGMAN_BODY_PARTS = [
  manHead,
  manBody,
  manRightHand,
  manLeftHand,
  manRightLeg,
  manLeftLeg,
];

type HangManDrawingProps = {
  numberOfGuesses: number;
};

const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div className={styles.stand}>
      {HANGMAN_BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.standHead}></div>
      <div className={styles.standTop}></div>
      <div className={styles.standMiddle}></div>
      <div className={styles.standBottom}></div>
    </div>
  );
};

export default HangManDrawing;
