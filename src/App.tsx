import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {

    const [startValue, setStartValue] = useState(0) // значение инпута
    const [maxValue, setMaxValue] = useState(0) // значение инпута

    const [count, setCount] = useState(startValue) // сохранить как-то стартовое значение инпута

    console.log('Стартовое значение инпута :' + startValue )
    console.log('Максимальное значение инпута :' + maxValue )

    return <div className={'app'}>
        <Settings setStartValue={setStartValue} setMaxValue={setMaxValue} startValue={startValue} maxValue={maxValue}/>
        <WindowCounter startValue={startValue}/>
    </div>
}

export default App;
