import './App.css';
import {useState} from "react";

function App() {

    return (
        <div className="App">
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
