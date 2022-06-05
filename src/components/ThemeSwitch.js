import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

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

export default ThemeSwitch;
