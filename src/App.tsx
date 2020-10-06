import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {

    const [getInputStartValue,setInputStartValue] = useState(0)
    const [getInputMaxValue,setInputMaxValue] = useState(0)

    function getStartValue(value: number){
        setInputStartValue(value)
    }

    function getMaxValue(value:number){
        setInputMaxValue(value)
    }

    console.log(getInputMaxValue)
    return <div className={'app'}>

        <Settings getStartValue={getStartValue} getMaxValue={getMaxValue}/>
      <WindowCounter/>

    </div>
}

export default App;
