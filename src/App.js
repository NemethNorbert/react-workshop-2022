import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './ThemeContext';
import {useCachedState} from './functions/cacheState';

const MAX_UNDISTURBED_CONVERSIONS = 5;

function App() {
	const [theme, setTheme] = useCachedState('theme', "light");
	const [conversions, setConversions] = useState(1);
	const [isPremium, setIsPremium] = useCachedState('isPremium');
	const [currencies, setCurrencies] = useState(null);

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

  useEffect(()=> {

    fetch('http://localhost:3003/data')
    .then(resp => resp.json())
    .then(data => {
      setCurrencies(data);
    })

  }, [])

  if (currencies!= null) 
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
				{currencies.map((currency, index) => (  
		             <Converter key={index} cryptoName={currency.label} exchangeRate={currency.conversionRate} onChange={onCoversionChange} header={<strong>{currency.name} converter</strong>}/>
		        ))}  
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
