import './App.css';
import Euro from './Euro.js';
import BTC from './Btc.js';

function App() {
  return (
    <div className="App">
      <label htmlFor="euro">Euros</label>
      <Euro id="euro" money={0} />
      <label htmlFor="bitcoin">$BTC</label>
      <BTC id="bitcoin" btc={1000} />
    </div>
  );
}

export default App;
