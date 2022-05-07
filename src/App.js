import { useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import Converter from "./components/Converter";


function App() {
	const [counter, setCounter] = useState(0);
	const [theme, setTheme] = useState("light");

	function countConversion(limit=5) {
		console.log("Counter: ", counter, " Limit: ", limit)
		if (counter >= limit) {
			alert("Convert without limits by becoming a premium user")
		} else {
			setCounter(counter+1)
		}
	}

	return (
		<ThemeContext.Provider value={{theme: theme}}>
			<div className={'App ' + theme}>
				<Converter cryptoName={'BTC'} exchangeRate={955} title={"EUR-BTC Converter"} onChange={countConversion} />
				<Converter cryptoName={'ETH'} exchangeRate={1.2} title={"EUR-ETH Converter"} onChange={countConversion} />
				<label>
					<span>Theme </span>
					<select
						onChange={event => setTheme(event.target.value)}
						value={theme}
					>
						<option value="dark">Dark</option>
						<option value="light">Light</option>
					</select>
				</label>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
