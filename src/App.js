import './App.css';

function App() {

 
  const handlesNumber = (e) => {
    // setNum1(e.target.value);
  };


  //  useEffect(()=>{
  //   console.log("!!!")
  // });

  return (
    <div className="App">
      <header className="App-header">
  
        <p>계산기</p>

        <input
        type="number"
        onChange={handlesNumber}
        >

        </input>
        
        <div className="numbers">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>9</button>
        </div>

        <div className="operations">
        <button>+</button>
        <button>-</button>
        <button>÷</button>
        <button>*</button>
        <button>AC</button>
        <button>=</button>

        </div>

      </header>
    </div>
  );
}

export default App;
