import React, { useState, useEffect, useRef } from 'react';
import MyInput from './components/MyInput';
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
    <div className="App">
      <div className="container">
        <h2 className="center">Zer0 to Hero</h2>
        <form>
          <MyInput 
            id="eur"
            name="eur"
            label="Euros" 
            className=""
            value={eur}
            onChange={validate}
            invalid={invalid}
            readonly={false}/> 

          <MyInput 
            id="btc"
            name="btc"
            label="$BTC" 
            className=""
            value={btc}
            invalid={invalid}
            readonly={true}/> 

          <button type="button">Convert</button>
        </form>
    </div>
    </div>
  );
}

export default App;
