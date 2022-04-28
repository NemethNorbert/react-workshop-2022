import React, { useState } from 'react';
import Amount from './components/Amount';
import SwapThemeButton from './components/SwapThemeButton';
import { ThemeProvider } from './components/ThemeContext';
import './App.css';

const exchangeRate = Math.random() * 10000;

const App = () => {

  const [state, setState] = useState({eur: 0, btc: 0, invalid: false});
  const {eur, btc, invalid} = state;

  const isNegative = (num) => {
    if (Math.sign(parseInt(num, 10)) === -1) {
      return true;
    }

    return false;
  }

  const validate = (element) => {
    let invalid = false;
    
    if (isNegative(element.value)) {
      invalid = true;
    } 

    let calcEur = element.value;
    let calcBtc = element.value * parseInt(exchangeRate, 10);

    setState({
      eur: calcEur,
      btc: calcBtc,
      invalid: invalid
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
            onChange={validate}
            invalid={invalid}
            readonly={false}/> 

          <Amount 
            id="btc"
            name="btc"
            label="BTC" 
            className=""
            value={btc}
            invalid={invalid}
            readonly={true}/> 

          <SwapThemeButton />
        </form>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
