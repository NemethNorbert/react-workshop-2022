import './App.css';
import React, { useEffect, useState, useContext } from "react";
import Converter from './components/Converter';

function App() {

  return (
    	<div>
			<Converter label="BTC" exchangeRate={995} />
			<Converter label="ETH" exchangeRate={1.2} />
    	</div>

  );
}

export default App;