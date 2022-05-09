import React, { useState } from 'react';
import Amount from './Amount';
import { usePremiumUpdate } from './PremiumContext';

const Converter = ({cryptoName, cryptoLabel, exchangeRate, title}) => {
    const [state, setState] = useState({eur: 0, crypto: 0});
    const {eur, crypto} = state;
    const countPremium = usePremiumUpdate();
  
    const onChange = (value) => {
  
      let calcEur = value;
      let calcCrypto = parseFloat(value * exchangeRate).toFixed(2);
  
      setState({
        eur: calcEur,
        crypto: calcCrypto,
      });

      countPremium();
    }

    return (
        <div className="converter">
            <form>
                <div className="converter-title center">
                    {title}
                </div>
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