import Converter from "./components/Converter";
import { useEffect, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import useCachedState from "./hooks/useCachedState";

function App() {
  const [theme, setTheme] = useCachedState("theme", "light");
  const [conversion, setConversion] = useState(0);
  const [isPremium, setIsPremium] = useCachedState("premium", false);
  const [conversionList, setConversionList] = useState([]);

  const MAX_CONVERSION = 5;

  const countConversion = () => {
    if (!isPremium && conversion === MAX_CONVERSION) {
      alert("Convert without limits by becoming a premium user");
      setConversion(1);
    } else {
      setConversion(conversion + 1);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3003/data")
      .then((resp) => resp.json())
      .then((data) => {
        setConversionList(data);
      });
  }, []);

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

        {conversionList.map((item) => {
          return (
            <Converter
              key={item.id}
              cryptoName={item.label}
              exchangeRate={item.conversionRate}
              onChange={countConversion}
              header={<h1>{item.name} converter</h1>}
            />
          );
        })}

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
