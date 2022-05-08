import {useEffect, useState} from 'react';
import './App.css';
import Amount from './components/Amount';

const convertToBtc = () => {
    return Math.random() * 10000;
}

function App() {
    const [amount, setAmount] = useState(
        () => window.localStorage.getItem('name') || 0,
    )
    const [exchangeRate, setExchangeRate] = useState(convertToBtc);

    useEffect(() => {
        window.localStorage.setItem('name', amount);
        let timer = setTimeout(()=>{setExchangeRate(0)}, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [amount])

    const onChange = (value) => {
        setAmount(value);

        if (exchangeRate === 0) {
            setExchangeRate(convertToBtc);
        }
    }

    return (
        <div className="App">
            <Amount currency="Euro" value={amount} onChange={onChange}/>
            <Amount currency="BTC" value={amount * exchangeRate}/>
        </div>
    );
}

export default App;
