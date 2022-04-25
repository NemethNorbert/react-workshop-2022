import React, { useState, useEffect, useRef } from 'react';
import MyInput from './components/MyInput';
import './App.css';

const exchangeRate = Math.random() * 10000;

const App = () => {

  const [state, setState] = useState({eur: 0, btc: 0});
  const {eur, btc} = state;

  const isNegative = (num) => {
    if (Math.sign(parseInt(num, 10)) === -1) {
      return true;
    }

    return false;
  }

  const validate = (element) => {
    if (isNegative(element.value)) {
        element.classList.add('invalid');
    } else {
        element.classList.remove('invalid');
    }

    let calcEur = element.value;
    let calcBtc = element.value * parseInt(exchangeRate, 10);

    setState({
      eur: calcEur,
      btc: calcBtc,
    });
  }

  return (
    <div className="App">
      <div className="container">
        <form>
          <MyInput 
            id="eur"
            name="eur"
            label="Euros" 
            value={eur}
            onChange={validate}
            readonly={false}/> 

          <MyInput 
            id="btc"
            name="btc"
            label="$BTC" 
            value={btc}
            readonly={true}/> 

          <button type="button">Convert</button>
        </form>
    </div>
    </div>
  );
}

export default App;
