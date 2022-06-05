import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function PremiumButton() {
  const appContext = useContext(ThemeContext);
  return (
    <span>
      {appContext.isPremium ? (
        <strong>💎 Premium conversion</strong>
      ) : (
        <button onClick={() => appContext.setIsPremium(true)}>
          Become premium
        </button>
      )}
    </span>
  );
}

export default PremiumButton;
