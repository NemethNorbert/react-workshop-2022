import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './contexts/ThemeContext';
import React from 'react';

function App() {
  const [conversion, setConversion] = useState(0);
  const [theme, setTheme] = useState("dark");

  function handleConversion(){
    setConversion(conversion + 1);
  }

  useEffect(()=>{
    if(conversion >=5){
      alert("Convert without limits by becoming a premium user");
    }
  },[conversion]);

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
  }, [])


  return (
    <ThemeContext.Provider value={{theme: theme}}>
      <div className={"App " + theme}>
      <Converter cryptoName="BTC" title= {<strong>BTC converter</strong>} exchangeRate={955} onChange={handleConversion}/>
      <Converter cryptoName="ETH" title= {<strong>ETH converter</strong>} exchangeRate={1.2} onChange={handleConversion}/>
      <select onChange={event => setTheme(event.target.value)} value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      {conversion}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
