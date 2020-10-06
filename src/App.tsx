import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {

    const [startValue,setStartValue] = useState(0)
    const [maxValue,setMaxValue] = useState(0)

    function getStartValue(value:number){
        setStartValue(value)
    }

    function getMaxValue(value:number){
        setMaxValue(value)
    }

    function incNumbers(){
        if(startValue < maxValue) {
            setStartValue( startValue + 1)
        }
    }

    function resNumbers(){
        if(startValue < maxValue) {
            setMaxValue( startValue)
        }
    }

    return <div className={'app'}>
        <Settings getMaxValue={getMaxValue} getStartValue={getStartValue} startValue={startValue} maxValue={maxValue}/>
        <WindowCounter incNumbers={incNumbers} resNumbers={resNumbers} startValue={startValue}/>
    </div>
}

export default App;
