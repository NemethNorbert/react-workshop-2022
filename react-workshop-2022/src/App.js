import './App.css';
import React, { useState } from 'react';


function App() {
  const [num, setNum] = useState(0);
  const handleNumberSet = (value) => setNum(value)
  return <Amount currencyType="Euros" value ={num} setValue = {handleNumberSet} />
}

function Amount(props) {
  return (
    <div className="App">
      <header className="App-header">
      <input label = {props.currencyType} type="number" value={props.value} onChange={(event) => props.setValue(event.target.value)}/>
      </header>
    </div>
  );
}


export default App;
