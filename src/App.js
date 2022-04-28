import './App.css';
import React, { useContext }  from 'react';
import PropTypes from 'prop-types';


const themes = {
    light: {
        foreground: "#000000",
        background: "lightblue"
    },
    dark: {
        foreground: "#ffffff",
        background: "darkblue"
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    const theme = useContext(ThemeContext);
    return (
      <ThemeContext.Provider value={themes.dark}>
          <div className="App" style={{ background: theme.background }}>
              <Amount currency="Euro" amount={1}/>
              <Amount currency="BTC" amount={42}/>
          </div>
      </ThemeContext.Provider>
  );
}

function Amount({currency, amount}) {
    const [currencyValue, setCurrencyValue] = React.useState(currency)
    const [amountValue, setAmountValue] = React.useState(amount)
    const [className, setClassName] = React.useState('');
    const setBorder = (event => setClassName(event.target.value < 0 ? 'invalid_amount' : ''))
    function getLabelledInput(id, label, readOnly=false, value=null) {
        const val = (readOnly) ? ((value === null) ? amountValue : value) : undefined
        const labelComp = <label htmlFor={id}>{label}</label>
        const inputComp = <input type="number" id={id} readOnly={readOnly} value={val} onChange={setBorder} />
        return <div className={className}> {labelComp} {inputComp} </div>
    }
    return (currency === 'Euro' ? EuroAmount(getLabelledInput) : BTCAmount(getLabelledInput, setAmountValue))
}

Amount.propTypes = {
    currency: PropTypes.string,
    amount: PropTypes.number,
}

function EuroAmount(getLabelledInput) {
    return getLabelledInput('euro', 'Euros:')
}

function BTCAmount(getLabelledInput, setAmountValue) {
    setTimeout(() => setAmountValue(0), 5000)
    return getLabelledInput('btc', 'BTCs:', true, exchangeRate())
}

function exchangeRate() {
    return Math.random() * 10000;
}

export default App;
