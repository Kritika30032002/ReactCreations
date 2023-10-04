import {useState} from "react";
import styles from "./calculator.module.css"
const Calculator=()=>{
const [display,setDisplay]=useState('');
const handleButtonClick=(value:string)=>{
    if (value === '=') {
        try {
          const result = eval(display);
          setDisplay(result.toString());
        } catch (error) {
          setDisplay('Error');
        }
      } else if (value === 'C') {
        setDisplay('');
      } else {
        setDisplay((prevDisplay) => prevDisplay + value);
      }
}
return (
    <div className={styles.calculatorContainer}>
    <div className={styles.calculator}>
      <div className={styles.display}>{display}</div>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="equals" onClick={() => handleButtonClick('=')}>=</button>
        <button className="clear" onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div></div>
  );
}
export default Calculator