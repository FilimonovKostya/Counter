import React, {useState} from 'react';
import './App.css';
import WindowCounter from './Components/WindowCounter';
import IncReset from './Components/IncReset';


function App() {

    let [numbers, setNumber] = useState<number>(0)

    function IncNumbers() { (numbers < 5) ? setNumber(++numbers) : setNumber(5) }

    function ResNumber()  {
        setNumber(0)
    }

    return (
        <div className={'wrapper'}>
            <WindowCounter valueNumbers={numbers}/>
            <IncReset incNumbers={IncNumbers} ResNumber={ResNumber} value={numbers}/>
        </div>

    );
}

export default App;
