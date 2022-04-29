import './App.css';
import {useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState(0);

    return (
        <div className="App">
            <input defaultValue={0} type='number' label="Euros"
                   onChange={(event) => setInputValue(Number(event.target.value))}/>
        </div>
    );
}

function Amount(props) {
    const myStyle = (props.value<0) ? { color: "red" } : { color: "black" }
    return <p style={myStyle}>{props.message}{props.value}</p>;
}

function exchangeRate(euroValue) {
    return (euroValue * 0.000026).toFixed(6);
}

export default App;
