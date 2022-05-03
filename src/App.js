import React, { useState } from 'react';
import Amount from './components/Amount';
import SwapThemeButton from './components/SwapThemeButton';
import { ThemeProvider } from './components/ThemeContext';
import './App.css';

const calcExchangeRate = () => {
	return Math.random() * 10000;
}

const App = () => {

  const [state, setState] = useState({eur: 0, btc: 0});
  const [exchangeRate, setExchangeRate] = useState(calcExchangeRate);
  const {eur, btc} = state;

  const onChange = (value) => {

    let calcEur = value;
    let calcBtc = value * parseInt(exchangeRate, 10);

    setState({
      eur: calcEur,
      btc: calcBtc,
    });
  }

  return (
    <ThemeProvider>
    <div className="App">
      <div className="container">
        <h2 className="center">Zer0 to Hero</h2>
        <form>
          <Amount 
            id="eur"
            name="eur"
            label="Euro" 
            className=""
            value={eur}
            onChange={onChange}
            readonly={false}/> 

          <Amount 
            id="btc"
            name="btc"
            label="BTC" 
            className=""
            value={btc}
            readonly={true}/> 

          <SwapThemeButton />
        </form>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
