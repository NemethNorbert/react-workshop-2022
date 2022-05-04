import '../App.css';
import React, { useContext, useState, useRef } from 'react';
import Amount from './Amount';
import ThemeContext from '../context/ThemeContext';

const defaultEuroValue=0;
const defaultConvertedValue=0;
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


export default function Converter({label, exchangeRate}) {

	const [mystate, setMyState] = React.useState({euroValue: defaultEuroValue, convertedValue: defaultConvertedValue, currentTheme: themes.light});
    const {euroValue, convertedValue, currentTheme} = mystate;
    const titleRef = React.useRef("Convert 0 euros to " + label);

	const myOnChange = (element) => {
		let calcEur = element.value;
		let calcConvertedValue = element.value / exchangeRate;
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

		titleRef.current="Convert " + calcEur + " euros to " + label;
		
		setMyState({
		  euroValue: calcEur,
		  convertedValue: calcConvertedValue,
		  currentTheme: theme
		});
	}

	return (
		<ThemeContext.Provider value={currentTheme}>
			<div>
				<div ref={titleRef}>
					Title: {titleRef.current}
				</div>
				<Amount label="Euros" value={euroValue} onChange={myOnChange} isRedBorderAdded={isRedBorderAdded} />
		    	<label>{label}:
		         	{convertedValue}
		      </label>
			</div>
		</ThemeContext.Provider>

  );
}