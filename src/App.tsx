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
    console.log('Сохраненное значение инпута :' + count )

    const incNumber = () =>{

       return  startValue < maxValue ? (setStartValue(startValue + 1)) : alert('Cтартовое значение меньше максимального или равны')
    }
    const resNumber = () =>  startValue < maxValue ? (setStartValue(count)) : alert('Cтартовое значение меньше максимального' +
        ' или равны')
    const settings = () => setCount(startValue)

    return <div className={'app'}>
        <Settings setStartValue={setStartValue}
                  setMaxValue={setMaxValue}
                  startValue={startValue}
                  maxValue={maxValue}
                  settings={settings}
        />
        <WindowCounter startValue={startValue} incNumber={incNumber} resNumber={resNumber}/>
    </div>
}

export default App;
