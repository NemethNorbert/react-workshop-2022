import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";

function ThemeSwitch() {
  const appContext = useContext(ThemeContext);
  return (
    <select
      onChange={(event) => appContext.setTheme(event.target.value)}
      value={appContext.theme}
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}

ThemeSwitch.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};

export default ThemeSwitch;
