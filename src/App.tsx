import React from 'react';
import './App.css';
import {BlockSettings} from "./components/BlockSettings";
import {BlockWindow} from "./components/BlockWindow";

function App() {

    const [inputStartValue, setInputStartValue] = React.useState(2)
    const [inputMaxValue, setInputMaxValue] = React.useState(5)
    const [count, setCount] = React.useState(inputStartValue)

    const [disabled, setDisabled] = React.useState(true)

    function inc() {
        count < inputMaxValue ? setCount(count + 1) : alert('error')
    }

    function res() {
        setCount(inputStartValue)
    }

    function set() {
        setCount(inputStartValue)
        setDisabled(true)
    }

    return <div className={'App'}>
        <BlockSettings
            setInputStartValue={setInputStartValue}
            setInputMaxValue={setInputMaxValue}
            startValue={inputStartValue}
            maxValue={inputMaxValue}
            set={set}
            disabled={disabled}
            setDisabled={setDisabled}
        />

        <BlockWindow inc={inc}
                     res={res}
                     inputStartValue={inputStartValue}
                     count={count}
                     setDisabled={setDisabled}
                     disabled={!disabled}
        />
    </div>
}

export default App