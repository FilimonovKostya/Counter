import React, {useState} from 'react';
import './App.css';
import {WindowCounter} from "./Components/WindowCounter";
import {IncReset} from "./Components/IncReset/IncReset";


function App() {

    let [numbers,setNumbers] = useState(0)


    function addNumbers() {
        (numbers < 5) ? setNumbers(++numbers) : setNumbers(5)
    }

    function removeNumbers() {
        (numbers > 0) ? setNumbers(--numbers) : setNumbers(0)
    }

    return (
        <div className={'wrapper'}>
            <WindowCounter number={numbers}/>
            <IncReset  addNumbers={addNumbers} removeNumbers={removeNumbers} value={numbers}/>
        </div>

    );
}

export default App;
