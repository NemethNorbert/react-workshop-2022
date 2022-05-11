import './App.css';
import React, { useEffect, useState, useContext } from "react";

const defaultEuroValue=10;
const timeOutMillis=5000;
const defaultBTCValue=0;
var isRedBorderAdded = false;
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
var currentTheme = themes.light;

const ThemeContext = React.createContext(currentTheme);


function App() {

	const [mystate, setMyState] = React.useState({euroValue: defaultEuroValue, btcValue: defaultBTCValue, currentTheme: themes.light});
    const {euroValue, btcValue, currentTheme} = mystate;
    const exchangeRate = getExchangeRate();

	useEffect(() => {
	    const timer = setTimeout(() => {

	    	setMyState({
			  euroValue: euroValue,
			  btcValue: defaultBTCValue,
			  currentTheme: currentTheme
			});

	    }, timeOutMillis);

    return function cleanup() {
      clearTimeout(timer);
    };
  },[euroValue]);

    const myOnChange = (element) => {
		let calcEur = element.value;
		let calcBtc = element.value / exchangeRate;
		let theme=currentTheme;

		if (theme==themes.light){
			theme = themes.dark;
		} else {
			theme=themes.light;
		}
		
		setMyState({
		  euroValue: calcEur,
		  btcValue: calcBtc,
		  currentTheme: theme
		});
	}

	const euroComponent =<ThemeContext.Provider value={currentTheme}><Amount label="Euros" value={euroValue} onChange={myOnChange} isReadOnly={false} /></ThemeContext.Provider>
	const btcComponent = <ThemeContext.Provider value={currentTheme}><Amount label="BTC" value={btcValue} isReadOnly={true} /></ThemeContext.Provider>

  return (
    	React.createElement(React.Fragment,null,euroComponent,btcComponent)
  );
}

function Amount({label, value, onChange, isReadOnly}) {

	const theme = useContext(ThemeContext);

	if (value >= 0){
    	isRedBorderAdded = false;
    } else {
    	isRedBorderAdded = true;
    }

	return (
		<div style={{ background: theme.background, color: theme.foreground }}>
		    <div className={(isRedBorderAdded && !isReadOnly) ? "error" : "App"}>
		    	<label>{label}:
		         <input type="number" value={value} readOnly={isReadOnly} onChange=
			        {
			        	(event) => {
			        		onChange(event.target)
			        	}
			        }
		        >
		        </input>
		      </label>
		    </div>
		</div>


  );
}

function getExchangeRate() {
	return Math.random() * 10000;
}

export default App;