import React, { useContext }  from 'react';
import './App.css';


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

function Currency ({id, name, value, readOnly, onChange}) {
  return (
    
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id} type="number" value={value}  readOnly={readOnly} onChange={(e) => onChange(e.target)}/>
    </div>
    
  )
}

function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  const [value, setValue] = React.useState(0)
  const [btc, setBTC] = React.useState(0)
  const [theme,setTheme] = React.useState(useContext(ThemeContext))

  let timeoutHanlder

  function swapTheme(){
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }
  const validateValue = element => {
    if (element.value < 0) {
      element.className = 'red'
    }
    else {
      element.className = 'black'
    }
    setValue(element.value)
    setBTC(value * exchangeRate())

    if (timeoutHanlder) {
      window.clearTimeout(timeoutHanlder);
    }

    timeoutHanlder = window.setTimeout(function(){
      setBTC(0)
    }, 5000)
  }

  return (
      <ThemeContext.Provider value={theme}>
      <div className="App" style={{ background: theme.background, color: theme.foreground }}>
        
          <Currency id="euro" name="Euro" value={value} className="black" readOnly={false} onChange={validateValue}/>
          <Currency id="btc" name="BTC" value={btc} className="black" readOnly={true}/>
          <button value="Swap Theme" onClick={swapTheme} >Swap Theme</button>
      </div>
      </ThemeContext.Provider>
      
  );
}

export default App;
