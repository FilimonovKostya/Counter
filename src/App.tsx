import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {
    const [startValue, setStartValue] = useState(1) // значение инпута
    const [maxValue, setMaxValue] = useState(3) // значение инпута
    const [count, setCount] = useState(startValue) // сохраняю стартовое значение инпута при нажатии set


    const incNumber = () => count < maxValue && setCount(count + 1)

    const resNumber = () => setCount(startValue)

    const settings = () => setCount(startValue)

    console.log(count)

    return <div className={'app'}>

        <Settings setStartValue={setStartValue}
                  setMaxValue={setMaxValue}
                  startValue={startValue}
                  maxValue={maxValue}
                  settings={settings}
        />

        <WindowCounter count={count}
                       startValue={startValue}
                       maxValue={maxValue}
                       incNumber={incNumber}
                       resNumber={resNumber}

        />

    </div>
}

export default App;
