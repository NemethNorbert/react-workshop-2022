import { useEffect, useState } from 'react';
import './App.css';
import Amount from './components/Amount';
import ThemeContext from './ThemeContext';

const calcExchangeRate = () => {
	return Math.random() * 10000;
}

function App() {
	const [value, setValue] = useState(0);
	const [exchangeRate, setExchangeRate] = useState(calcExchangeRate);
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		let timer = setTimeout(()=>{setExchangeRate(0)}, 5000);

		return () => {
			clearTimeout(timer);
		}
	},[value]);

	const onChange = (value) => {
		setValue(value);

		if (exchangeRate === 0) {
			setExchangeRate(calcExchangeRate);
		}
	}

	return (
		<ThemeContext.Provider value={{theme: theme}}>
			<div className={'App ' + theme}>
				<Amount name="Euros" value={value} onChange={onChange}/>
				<Amount name="BTC" value={parseFloat(value * exchangeRate).toFixed(4)} disabled />
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
