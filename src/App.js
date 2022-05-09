import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './ThemeContext';

const MAX_UNDISTURBED_CONVERSIONS = 5;

function App() {
	const [theme, setTheme] = useState("light");
	const [conversions, setConversions] = useState(1);
	const [isPremium, setIsPremium] = useState(false);

	const onCoversionChange = () => {
		if (conversions === MAX_UNDISTURBED_CONVERSIONS && !isPremium) {
			alert('Convert without limits by becoming a premium user')
			setConversions(1);
		} else {
			setConversions(conversions + 1);
		}
	}

	const onPremiumChange = (event) => {
		setIsPremium(event.target.checked);
		setConversions(1);
	}

/*
  useEffect(()=> {
    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
  }, [])
*/
	return (
		<ThemeContext.Provider value={{theme: theme}}>
			<div className={'App ' + theme}>
				<label>
					<span>Are you premium member? </span>
					<input type="checkbox"
						onChange={onPremiumChange}
						value={isPremium}
					>
					</input>
					{isPremium ? " Welcome our dearest Premium Customer, please sell us your soul! :) " : ""}
				</label>
				<br/>
				<Converter cryptoName={"BTC"} exchangeRate={992} onChange={onCoversionChange} header={<strong>Bitcoin converter</strong>}/>
				<Converter cryptoName={"ETH"} exchangeRate={1.2} onChange={onCoversionChange} header={<strong>Ethernium converter</strong>}/>
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
