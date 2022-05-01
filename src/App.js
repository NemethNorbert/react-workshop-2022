import React from 'react';
import { useState } from 'react';
import './App.css';
import Amount from './components/Amount';

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
      <Amount currency="Euro" value={amount} onChange={setAmount}/>
    </div>
  );
}

export default App;
