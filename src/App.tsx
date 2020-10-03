import React, {useState} from 'react';
import './App.css';
import WindowCounter from './Components/WindowCounter';
import CleverButtons from './Components/CleverButtons';
import {Settings} from "./Components/Settings";


function App() {

    let [numbers, setNumber] = useState<number>(1)

    function incNumbers() {
        (numbers < 5) ? setNumber(++numbers) : setNumber(5)
    }

    function resNumber() {
        setNumber(0)
    }

    function getMaxValue(value: any) {
        setNumber(value)
    }

    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <WindowCounter valueNumbers={numbers}/>
                <CleverButtons numbers={numbers}
                               incNumbers={incNumbers}
                               resNumbers={resNumber}/>
            </div>
            <Settings getMaxValue={getMaxValue} numbers={numbers}/>
        </div>

    );
}

export default App;
