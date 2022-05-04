import React, { useContext }  from 'react';
import './App.css';
import Converter from './Converter.js';


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
 
  const [theme,setTheme] = React.useState(useContext(ThemeContext))
  
  function swapTheme(){
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }
  
  return (
      <ThemeContext.Provider value={theme}>
      <div className="App" style={{ background: theme.background, color: theme.foreground }}>
        
         <Converter convertedName="btc" cryptoName="$BTC"  exchangeRate="995" />
         <Converter convertedName="eth" cryptoName="$ETH"  exchangeRate="1.2" />
          <button value="Swap Theme" onClick={swapTheme} >Swap Theme</button>
      </div>
      </ThemeContext.Provider>
      
  );
}

export default App;
