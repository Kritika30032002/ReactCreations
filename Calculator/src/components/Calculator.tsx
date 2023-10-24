import { useState, useEffect } from "react";
import styles from "./calculator.module.css"

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = e => setResult(result.concat(e.target.id))

  const deleteEl = () => setResult(result.slice(0, -1))
  const clear = () => setResult('')

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("")
    }
  }

  const handleKeyPress = (e) => {
    const key = e.key;
    if (/[0-9.+\-*/]/.test(key)) {
      setResult(result.concat(key))
    } else if (key === 'Backspace') {
      deleteEl();
    } else if (key === 'Enter') {
      calculate();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [result]);


  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <div className={styles.display}>{result}</div>
        <div className={styles.buttons}>

          <button onClick={clear} className={styles.operator}>AC</button>
          <button onClick={deleteEl} className={styles.operator}>DE</button>

          <button id="." className={styles.operator} onClick={handleClick}>.</button>
          <button id="/" className={styles.operator} onClick={handleClick}>/</button>

          <button id="7" className={styles.number} onClick={handleClick}>7</button>
          <button id="8" className={styles.number} onClick={handleClick}>8</button>
          <button id="9" className={styles.number} onClick={handleClick}>9</button>
          <button id="+" className={styles.operator} onClick={handleClick}>+</button>
          <button id="4" className={styles.number} onClick={handleClick}>4</button>
          <button id="5" className={styles.number} onClick={handleClick}>5</button>
          <button id="6" className={styles.number} onClick={handleClick}>6</button>
          <button id="-" className={styles.operator} onClick={handleClick}>-</button>
          <button id="1" className={styles.number} onClick={handleClick}>1</button>
          <button id="2" className={styles.number} onClick={handleClick}>2</button>
          <button id="3" className={styles.number} onClick={handleClick}>3</button>
          <button id="*" className={styles.operator} onClick={handleClick}>*</button>
          <button id="00" className={styles.number} onClick={handleClick}>00</button>
          <button id="0" className={styles.number} onClick={handleClick}>0</button>

          <button id="=" className={styles.equals} onClick={calculate}>=</button>
        </div>
      </div></div>
  );
}
export default Calculator