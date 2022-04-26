import React, { useContext }  from 'react';
import './App.css';
import Euro from './Euro.js';
import BTC from './Btc.js';

const themes = {
  light: {
    foreground: "#000000",
    background: "lightblue"
  },
  dark: {
    foreground: "#ffffff",
    background: "darkblue"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themes.dark}>
    <div className="App" style={{ background: theme.background }}>
      <label htmlFor="euro">Euros</label>
      <Euro id="euro" money={1000} />
      <label htmlFor="bitcoin">$BTC</label>
      <BTC id="bitcoin" btc={1000} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
