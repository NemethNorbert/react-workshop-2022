import './App.css';
import React, { useState,useReducer } from 'react';
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
  const exchangeRate = props.exchangeRate || props.exchangeRate ===0 ? props.exchangeRate : 1;
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
  const btwCrush = () => { 
    const interval = setInterval(() => { 
      console.log("crack"); 
      setExchangeRate(0);
    }, 
    5000);
    return () => clearInterval(interval)};
  const [btwCrushTimerReseter, setCrushTimer] = useReducer((state, action) => {
    btwCrush();
  }, btwCrush());
  const valueSet = (e)=> {
      props.setValue(e);
     btwCrushTimerReseter(); 
     setCrushTimer();} 
  return (
      <Amount {...props} exchangeRate = {exchangeRate} currencyType="$BTC" setValue={valueSet}/>
  )
}


export default App;
