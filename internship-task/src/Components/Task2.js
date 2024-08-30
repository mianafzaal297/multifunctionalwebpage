// Task2.js
import React, { useState } from 'react';
import styles from './Task2.module.css';

const Task2 = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the input expression using eval (use caution with eval)
        const evalResult = eval(input); // Remember, eval can be dangerous in production use cases!
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.displayContainer}>
        <div className={styles.display}>{result || input || '0'}</div>
      </div>
      <div className={styles.keyboardContainer}>
        <div className={styles.keyboard}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)} className={styles.button}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task2;
