import './App.css';
import React, { useEffect, useState, useContext } from "react";
import Amount from './components/Amount';
import ThemeContext from './context/ThemeContext';

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

		if (element.value >= 0){
	    	isRedBorderAdded = false;
	    } else {
	    	isRedBorderAdded = true;
	    }

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

  return (
    	<div>
    		<ThemeContext.Provider value={currentTheme}>
    			<Amount label="Euros" value={euroValue} onChange={myOnChange} isReadOnly={false} isRedBorderAdded={isRedBorderAdded} />
				<Amount label="BTC" value={btcValue} isReadOnly={true} isRedBorderAdded={false} />    			
    		</ThemeContext.Provider>
    	</div>

  );
}


function getExchangeRate() {
	return Math.random() * 10000;
}

export default App;