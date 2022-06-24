import PropTypes from 'prop-types';

function ThemeSwitch({eventHandler, theme}) {
    return (
        <select onChange={eventHandler} value={theme.name}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

ThemeSwitch.propTypes = {
    eventHandler: PropTypes.func,
    theme: PropTypes.object
}

export default ThemeSwitch;