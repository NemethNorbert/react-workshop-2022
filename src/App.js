import React, { useState, useEffect } from 'react';
import Converter from './components/Converter';
import SwapThemeButton from './components/SwapThemeButton';
import PremiumAlert from './components/PremiumAlert';
import { ThemeProvider } from './components/ThemeContext';
import { PremiumProvider } from './components/PremiumContext';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      setCoins(data);
    })
  }, [])

  return (
    <ThemeProvider>
       <PremiumProvider>
        <div className="App">
          <PremiumAlert />
          <div className="container">
            <h2 className="title center">Zer0 to Hero</h2>
            {coins.map(coin => {
              return (
                <Converter 
                  id={coin.id}
                  key={coin.id}
                  cryptoName={coin.name}
                  cryptoLabel={coin.label}
                  exchangeRate={coin.conversionRate}
                  className=""
                  title={<h3>EUR > {coin.name}</h3>}
                />
              )
            })}
            <SwapThemeButton />
          </div>
        </div>
      </PremiumProvider>
    </ThemeProvider>
  );
}

export default App;
