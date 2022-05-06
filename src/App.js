import Converter from './components/Converter';
import {useState } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  
  const [theme, setTheme] = useState('light')

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


        <Converter
            header={<h1>BTC converter</h1>}
            cryptoName="$BTC"
            exchangeRate={995}
        />
        <Converter
            header={<h1>ETH converter</h1>}
            cryptoName="$ETH"
            exchangeRate={1.2}
        />
     </div>
    </ThemeContext.Provider>
  );
}

export default App;
