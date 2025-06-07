// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = eval(input); // ⚠️ eval is okay for demos, not secure for real apps
      setResult(evalResult.toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="input-box"
          placeholder="0"
        />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button onClick={clearInput}>AC</button>
        <button onClick={handleBackspace}>⌫</button>
        <button onClick={() => handleClick('/')}>%</button>
        <button onClick={() => handleClick('÷')}>÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('00')}>00</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>     
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
