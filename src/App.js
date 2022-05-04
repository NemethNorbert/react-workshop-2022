import './App.css';
import React from 'react';

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

const ThemeContext = React.createContext(themes.light);

function Amount(props) {
	const [val, setVal] = React.useState('')

	function change(event) {
		setVal(event.target.value)
		props.onAmountChanged(event.target.value)
	}

	const theme = React.useContext(ThemeContext);

    return (
	<div className={val < 0 ? 'negativeNumber' : ''} style={{ background: theme.background, color: theme.foreground }}>
		<label htmlFor="amount">{props.name}: </label>
		{props.amountValue !== undefined ? <span>{props.amountValue}</span> : <input id="amount" onChange={change} />}
	</div>
	);
}

var lastActiveTime = Date.now();

function App() {
	const [eur, setEur] = React.useState(0)
	const [crashCoefficient, setCrashCoefficient] = React.useState(1)
	const [theme, setTheme] = React.useState(themes.light);

    function exchangeRate() {
		return Math.random() * 10000 * crashCoefficient;
    }

	function changeEur(value) {
		setEur(value)
		lastActiveTime = Date.now();
		setTimeout(crash, 5000)
	}

	function crash() {
		const inactivityTime = Date.now() - lastActiveTime
		if (inactivityTime >= 5000) {
			setCrashCoefficient(0)
		}
	}

	function changeTheme() {
		if (theme === themes.light) {
			setTheme(themes.dark);
		} else {
			setTheme(themes.light);
		}
	}

  return (
  <ThemeContext.Provider value={theme}>
    <div className="App">
		<Amount name="Euros" onAmountChanged={changeEur} />
		<Amount name="BTC" amountValue={eur * exchangeRate()} />
		<button onClick={changeTheme}>Change Theme</button>
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
