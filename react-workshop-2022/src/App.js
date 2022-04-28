import './App.css';
import React, { useState } from 'react';
import './Amount.css';




function App() {
  const [num, setNum] = useState(0);
  return <div className="App">
          <header className="App-header">
            <Amount currencyType="Euros" value ={num} setValue = {setNum} />
            <BtwAmount value ={num} setValue = {setNum} /> 
          </header>
        </div>;
}

function Amount(props) {
  const exchangeRate = props.exchangeRate ? props.exchangeRate : 1;
  const className = props.value < 0 ? "Wrong-amount" : "";
  return (
      <input className={className} 
      label = {props.currencyType} 
      type="number" 
      value={exchangeRate*props.value} 
      onChange={(event) => props.setValue(event.target.value*exchangeRate)}/>
  )
}

function BtwAmount(props) {
  const [exchangeRate, setExchangeRate] = useState(Math.random() * 10000)
  return (
      <Amount {...props} exchangeRate = {exchangeRate} currencyType="$BTC"/>
  )
}


export default App;
