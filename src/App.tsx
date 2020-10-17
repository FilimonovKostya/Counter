import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {

    const [startValue, setStartValue] = useState(0) // значение инпута
    const [maxValue, setMaxValue] = useState(0) // значение инпута

    const [count, setCount] = useState(startValue) // сохранить как-то стартовое значение инпута

    return <div className={'app'}>
        <Settings />
        <WindowCounter />
    </div>
}

export default App;
