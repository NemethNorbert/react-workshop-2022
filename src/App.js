import { useEffect, useState } from 'react';
import './App.css';
import  Amount from'./components/Amount.js';
import ThemeContext from './contexts/ThemeContext';
import React from 'react';

const getExchangeRate = () => {
  return Math.random() * 10000;
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
    <ThemeContext.Provider value={{theme: theme}}>
      <div className={"App " + theme}>
      <Amount onChange={myChange} name="euro" label="Euros:" value={value}/>
      <Amount name="BTC" label="BTCs: " value={value * exchangeRate} readOnly="true"/>
      <select 	onChange={event => setTheme(event.target.value)} value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
