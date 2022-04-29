import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

const getExchangeRate = () => {
  return Math.random() * 10000;
}


function Amount(props){
  const name = props.name || "";
  const value = props.value || 0;
  const label = props.label || "";
  const readOnly = props.readOnly || false;

	function change(event) {    
  props.onChange(event.currentTarget.value);
 
  }

  return (
    <div className="Amount">
      <form>
        <label htmlFor={name}>{label}</label>
        <input onChange={change} style={{outline: value < 0 ? '2px solid red' : ""}}  id={name} value={value} readOnly={readOnly}/>    
      </form>
    </div>
  );
}


function App() {
  const [value, setValue] = useState(-1);
  const [exchangeRate, setExchangeRate] = useState(getExchangeRate);
  const [theme, setTheme] = useState("dark");

  useEffect(() =>{
    let timer = setTimeout(()=>{setExchangeRate(0)},5000);
    return () => {
			clearTimeout(timer);
		}
	},[value]);

  const myChange = (value) =>  {
    setValue(value);
  };
  return (

    <div className={"App " + theme}>
     <Amount onChange={myChange} name="euro" label="Euros:" value={value}/>
     <Amount name="BTC" label="BTCs: " value={value * exchangeRate} readOnly="true"/>
     <select 	onChange={event => setTheme(event.target.value)} value={theme}>
       <option value="light">light</option>
       <option value="dark">dark</option>
     </select>
    </div>

  );
}

export default App;
