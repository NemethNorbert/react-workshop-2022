import { useContext } from "react";
import PropTypes from "prop-types";
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

PremiumButton.propTypes = {
  isPremium: PropTypes.bool,
  setIsPremium: PropTypes.func,
};
export default PremiumButton;
