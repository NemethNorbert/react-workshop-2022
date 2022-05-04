import Amount from './components/Amount';
import { useEffect, useState } from 'react';
import ThemeContext from './context/ThemeContext';

function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  const [value, setValue] = useState(0);
  const [rate, setRate] = useState(exchangeRate);
  const [theme, setTheme] = useState('light')

  useEffect(() => {
		const timer = setTimeout(() => {alert("having a crush")}, 5000);

		return () => {
			clearTimeout(timer);
		}
	},[value]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <select
            onChange={event => setTheme(event.target.value)}
            value={theme}
            >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      <Amount name="Euro" value={value} onChange={setValue} readonly={false}/>
      <Amount name="BTC" value={value * rate} readonly={true}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
