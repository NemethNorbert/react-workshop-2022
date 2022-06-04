import Converter from "./components/Converter";
import { useEffect, useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [conversion, setConversion] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  const MAX_CONVERSION = 5;

  const countConversion = () => {
    if (!isPremium && conversion === MAX_CONVERSION) {
      alert("Convert without limits by becoming a premium user");
      setConversion(1);
    } else {
      setConversion(conversion + 1);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <select
          onChange={(event) => setTheme(event.target.value)}
          value={theme}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>

        <Converter
          cryptoName="$BTC"
          header={<h1>BTC converter</h1>}
          exchangeRate={995}
          onChange={countConversion}
        />
        <Converter
          cryptoName="$ETH"
          header={<h1>ETH converter</h1>}
          exchangeRate={1.2}
          onChange={countConversion}
        />
        <span>
          {isPremium ? (
            <strong>💎 Premium conversion</strong>
          ) : (
            <button onClick={() => setIsPremium(true)}>Become premium</button>
          )}
        </span>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
