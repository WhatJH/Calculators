import './App.css';
import React, {useState} from "react";

function App() {

 
  const handlesNumber = (e) => {
    // setNum1(e.target.value);
  };


  const [display, setDisplay] = useState('0');
  const [watingForOperand, setWatingForOperand] = useState(true);

  const inputDigit = (digit) => {
    if (watingForOperand) {
      setDisplay(String(digit));
      setWatingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  }

  

  return (
    <div className="App">
      <header className="App-header">
  
        <p>계산기</p>

        <input readonly
        type="number"
        value={display}
        readOnly
        onChange={handlesNumber}
        >

        </input>
        
      <div className="numbers">
        <div className="row">
          <button id="num-1">1</button>
          <button id="num-2">2</button>
          <button id="num-3">3</button>
        </div>

        <div className="row">
          <button id="num-4">4</button>
          <button id="num-5">5</button>
          <button id="num-6">6</button>
        </div>

        <div className="row">
          <button id="num-7">7</button>
          <button id="num-8">8</button>
          <button id="num-9">9</button>
        </div>
        <button id="num-0">0</button>


        </div>

        <div className="operations">

          <div className="flex-column">
            <button id="divide">÷</button>
            <button id="multiply">x</button>
            <button id="minus">-</button>
            <button id="plus">+</button>
          </div>

            <button id="all-clear">AC</button>
            <button id="clear">C</button>
            <button id="calculate">=</button>
        

        </div>

      </header>
    </div>
  );
}

export default App;
