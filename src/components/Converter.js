import React, { useState } from 'react';
import Amount from './Amount';

const Converter = ({cryptoName, exchangeRate}) => {
    const [state, setState] = useState({eur: 0, crypto: 0});
    const {eur, crypto} = state;
    const cryptoLabel = cryptoName.toUpperCase();
  
    const onChange = (value) => {
  
      let calcEur = value;
      let calcCrypto = parseFloat(value * exchangeRate).toFixed(2);
  
      setState({
        eur: calcEur,
        crypto: calcCrypto,
      });
    }

    return (
        <div className="converter">
            <form>
            <Amount 
                id="eur"
                name="eur"
                label="Euro" 
                className=""
                value={eur}
                onChange={onChange}
                readonly={false}/> 

            <Amount 
                id={cryptoName}
                name={cryptoName}
                label={cryptoLabel} 
                className=""
                value={crypto}
                readonly={true}/> 
            </form>
        </div>
    );
  }
  
  export default Converter;