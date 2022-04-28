import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <input label = "Euros" type="number" value={num} onChange={event => setNum(event.target.value)}/>
      </header>
    </div>
  );
}

export default App;
