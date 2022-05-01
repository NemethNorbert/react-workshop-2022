import Amount from './components/Amount';
import { useEffect, useState } from 'react';


function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  const [value, setValue] = useState(0);
  const [rate, setRate] = useState(exchangeRate);

  useEffect(() => {
		const timer = setTimeout(() => {alert("having a crush")}, 5000);

		return () => {
			clearTimeout(timer);
		}
	},[value]);

  return (
    <div className="App">
      <Amount name="Euro" value={value} onChange={setValue} readonly={false}/>
      <Amount name="BTC" value={value * rate} readonly={true}/>
    </div>
  );
}

export default App;
