import { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/Converter';
import ThemeContext from './ThemeContext';
import PremiumButton from './PremiumButton';
import {PremiumProvider} from './PremiumContext';

const MAX_UNDISTURBED_CONVERSIONS = 5;

function App() {
	const useCachedState = (key, defaultValue)  => {
		return useState(window.localStorage.getItem(key) || defaultValue)
	}

	const [theme, setTheme] = useCachedState("theme","light");
	const [conversions, setConversions] = useState(1);
	const [premium, setPremium] = useCachedState("premium",false);
	const [currences, setCurrences] = useState([]);

	const onCoversionChange = () => {
		if (!premium) {
			if (conversions === MAX_UNDISTURBED_CONVERSIONS) {
				alert('Convert without limits by becoming a premium user')
				setConversions(1);
			} else {
				setConversions(conversions + 1);
			}
		}
	}

	const onSelectTheme = (event) => {
		setTheme(event.target.value);
		window.localStorage.setItem("theme", event.target.value)
	}
	const becomePremiumMember = () => {
		setPremium(true)
		window.localStorage.setItem('premium', true)
	}
 
	useEffect(()=> {
		fetch('http://localhost:3003/data')
		.then(resp => resp.json())
		.then(data => {
		console.log(data);
		setCurrences(data)
		})
	}, [])

	return (
		<PremiumProvider value={{premium : premium, becomePremiumMember : becomePremiumMember}}>
			<ThemeContext.Provider value={{theme: theme}}>
				<div className={'App ' + theme}>

					<div>{premium ? '💎 Premium conversion' : ''}</div>
					{currences.map((currency) => (
						<Converter key={currency.id} cryptoName={currency.label} exchangeRate={currency.conversionRate} onChange={onCoversionChange} header={<strong>{currency.name} converter</strong>}/>	
					))}		
					<label>
						<span>Theme </span>
						<select
							onChange={onSelectTheme}
							value={theme}
						>
							<option value="dark">Dark</option>
							<option value="light">Light</option>
						</select>
					</label>
					<PremiumButton />
				</div>
			</ThemeContext.Provider>
		</PremiumProvider>
	);
}

export default App;
