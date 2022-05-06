import React, { useState, useEffect } from 'react';
import Converter from './components/Converter';
import SwapThemeButton from './components/SwapThemeButton';
import { ThemeProvider } from './components/ThemeContext';
import './App.css';

const App = () => {

  return (
    <ThemeProvider>
    <div className="App">
      <div className="container">
        <h2 className="center">Zer0 to Hero</h2>
        <Converter 
          cryptoName={"btc"}
          exchangeRate={995}
          className=""
        />
        <Converter 
          cryptoName={"eth"}
          exchangeRate={1.2}
          className=""
        />
        <SwapThemeButton />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
