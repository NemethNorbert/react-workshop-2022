import React, { useState, useEffect } from 'react';
import Converter from './components/Converter';
import SwapThemeButton from './components/SwapThemeButton';
import PremiumAlert from './components/PremiumAlert';
import { ThemeProvider } from './components/ThemeContext';
import { PremiumProvider } from './components/PremiumContext';
import './App.css';

const App = () => {

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
  }, [])

  return (
    <ThemeProvider>
       <PremiumProvider>
        <div className="App">
          <PremiumAlert />
          <div className="container">
            <h2 className="title center">Zer0 to Hero</h2>
            <Converter 
              cryptoName={"btc"}
              exchangeRate={995}
              className=""
              title={<h3>EUR > BTC</h3>}
            />
            <Converter 
              cryptoName={"eth"}
              exchangeRate={1.2}
              className=""
              title={<h3>EUR > ETH</h3>}
            />
            <SwapThemeButton />
          </div>
        </div>
      </PremiumProvider>
    </ThemeProvider>
  );
}

export default App;
