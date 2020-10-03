import React, {useState} from 'react';
import './App.css';
import WindowCounter from './Components/WindowCounter';
import CleverButtons from './Components/CleverButtons';
import {Settings} from "./Components/Settings";


function App() {
    debugger

    const [startValue, setStartValue] = useState<number>(2)

    let [maxValue, setMaxValue] = useState<number>(5)

    function incNumbers() {
        if (startValue < maxValue) {
            setStartValue( startValue + 1)
        } else if (startValue === maxValue) {
            alert('StarValue === MaxValue')
        } else {
            alert('Одно положительно а другое отрицательное или все отрицательные')
        }
    }

    function resNumber() {
        debugger
        if (startValue < maxValue) {
         setStartValue( startValue  )

        } else {
            alert('error')
        }
    }

    function getStartValue(value: number) {
        setStartValue(value)
    }

    function getMaxValue(value: number) {
        setMaxValue(value)
    }

    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <WindowCounter startValue={startValue} maxValue={maxValue} />

                <CleverButtons startValue={startValue}
                               maxValue={maxValue}
                               incNumbers={incNumbers}
                               resNumbers={resNumber}/>
            </div>
            <Settings getStartValue={getStartValue} getMaxValue={getMaxValue}/>
        </div>

    );
}

export default App;
