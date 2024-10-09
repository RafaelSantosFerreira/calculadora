import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Função para atualizar o valor do input quando um botão é pressionado
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Função para calcular o resultado
  const calculate = () => {
    try {
      setResult(eval(input)); // Utilizando eval para realizar o cálculo
    } catch (error) {
      setResult('Erro');
    }
  };

  // Função para limpar o input e o resultado
  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <div className="calculator">
        <div className="display">
          <p>{input}</p>
          <h2>{result}</h2>
        </div>
        <div className="buttons">
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('(')}>(</button>
          <button onClick={() => handleClick(')')}>)</button>
          <button onClick={() => handleClick('/')}>/</button>
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
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
