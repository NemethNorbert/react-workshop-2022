import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";

function Amount({ id, name, onChange, value }) {
  const [isNegative, setIsNegative] = useState(false);

  const autoFocusRef = useRef(null);

  const onChangeHandler = (e) => {
    setIsNegative(e.currentTarget.value < 0);
    onChange(e.currentTarget.value);
  };

  useEffect(() => {
    if (name === "Ethernium") {
      autoFocusRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor={id}></label>
      <input
        className={isNegative ? "negative" : ""}
        id={id}
        name={id}
        onChange={onChangeHandler}
        placeholder="0"
        ref={autoFocusRef}
        type="number"
        value={value}
      />
    </>
  );
}

export default Amount;
