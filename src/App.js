import React, { useState, useEffect, useRef } from 'react';
import MyInput from './components/MyInput';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <form>
          <MyInput 
            id="eur"
            name="eur"
            className=""
            label="Euros" /> 
          <button type="button">Convert</button>
        </form>
    </div>
    </div>
  );
}

export default App;
