import React, {useState} from 'react';
import './App.css';
import WindowCounter from './Components/WindowCounter';
import CleverButtons from './Components/CleverButtons';
import {Settings} from "./Components/Settings";


function App() {

    let [startValue, setStartValue] = useState<number>(0)

    let [prevStartValue, setPrevStartValue] = useState<Array<number>>([])
    console.log(prevStartValue)
    const oldValue = startValue

    let [maxValue, setMaxValue] = useState<number>(0)

    function incNumbers() {

        if (startValue < maxValue) {
            setStartValue(startValue + 1)
            prevStartValue.push(startValue)
        } else if (startValue === maxValue) {
            alert('StarValue === MaxValue')
        } else {
            alert('Одно положительно а другое отрицательное или все отрицательные')
        }
    }

    function resNumber() {

        if (startValue < maxValue) {
         setStartValue(prevStartValue[0])
        } else {
            setStartValue( startValue  )
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
            <Settings getStartValue={getStartValue} getMaxValue={getMaxValue} setPrevStartValue={setPrevStartValue}/>
        </div>

    );
}

export default App;
