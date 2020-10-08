import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {

    const [startValue, setStartValue] = useState(0) // значение инпута
    const [maxValue, setMaxValue] = useState(0) // значение инпута

    const [count, setCount] = useState(startValue) // сохранить как-то стартовое значение инпута

    console.log('Стартовое значение инпута - ' + count)
    console.log('Увеличивающиеся стартовое значение инпуа - ' + startValue)
    console.log('Увеличивающиеся максимальное значение инпута - ' + maxValue)

    function incNumber() {
        if (startValue < maxValue) {
            setStartValue(startValue + 1)
        }
        else if (startValue > maxValue){
            alert('Стартовое значение не может быть больше максимального')
        }
    }

    function resNumber() {
        if (startValue < maxValue) {
            setStartValue(count)
        } else {
            setStartValue(count)
        }
    }

    function set(){
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCount(startValue)
    }

    return <div className={'app'}>
        <Settings setStartValue={setStartValue}
                  setMaxValue={setMaxValue}
                  set={set}

                  startValue={startValue}
                  maxValue={maxValue}/>

        <WindowCounter incNumber={incNumber} resNumber={resNumber} startValue={startValue} maxValue={maxValue}/>
    </div>
}

export default App;
