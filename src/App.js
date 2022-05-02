import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Amount from './components/Amount';

const convertToBtc = () => {
    return Math.random() * 10000;
}

function App() {
  const [amount, setAmount] = useState(
      () => window.localStorage.getItem('name') || 0,
  )
  useEffect(() => {
       window.localStorage.setItem('name', amount)
  }, [amount])

  const [exchangeRate, setExchangeRate] = useState(convertToBtc);

  return (
    <div className="App">
      <Amount currency="Euro" value={amount} onChange={setAmount} />
      <Amount currency="BTC" value={amount * exchangeRate} />
    </div>
  );
}

export default App;
