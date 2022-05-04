import './App.css';
import React from "react";
import Converter from './components/Converter';

function App() {
	const convertCountRef = React.useRef(0);

  return (
	<div>
		<Converter label="BTC" exchangeRate={995} convertCount={convertCountRef} />
		<br/>
		<Converter label="ETH" exchangeRate={1.2} convertCount={convertCountRef} />
	</div>

  );
}

export default App;