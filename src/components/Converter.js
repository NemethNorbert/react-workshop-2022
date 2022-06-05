import React, { useState } from "react";
import Amount from "./Amount";

function Converter({ cryptoName, exchangeRate, header, onChange }) {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
    onChange();
  };

  const cryptoValue = parseFloat(value * exchangeRate).toFixed(2);

  return (
    <>
      <div className="header">{header}</div>
      <Amount
        id="Euro"
        name="Euro"
        onChange={handleChange}
        readonly={false}
        value={value}
      />

      <Amount
        id={cryptoName}
        name={cryptoName}
        readonly={true}
        value={cryptoValue}
      />
    </>
  );
}

export default Converter;
