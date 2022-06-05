import { useEffect, useState } from "react";
import Converter from "./components/Converter";
import PremiumButton from "./components/PremiumButton";
import PropTypes from "prop-types";
import ThemeContext from "./context/ThemeContext";
import ThemeSwitch from "./components/ThemeSwitch";
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
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
        isPremium: isPremium,
        setIsPremium: setIsPremium,
      }}
    >
      <div className={`app ${theme}`}>
        <ThemeSwitch />
        {conversionList.map((item) => {
          return (
            <Converter
              id={item.id}
              key={item.id}
              cryptoName={item.label}
              exchangeRate={item.conversionRate}
              onChange={countConversion}
              header={<h1>{item.name} converter</h1>}
            />
          );
        })}
        <PremiumButton />
      </div>
    </ThemeContext.Provider>
  );
}

App.propTypes = {
  theme: PropTypes.string,
  conversion: PropTypes.number,
  isPremium: PropTypes.bool,
  conversionList: PropTypes.array,
};

export default App;
