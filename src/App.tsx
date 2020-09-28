import React, {useState} from 'react';
import './App.css';
import WindowCounter from './Components/WindowCounter';
import CleverButtons from './Components/CleverButtons';


function App() {

    let [numbers, setNumber] = useState<number>(0)

    function incNumbers() {
        (numbers < 5) ? setNumber(++numbers) : setNumber(5)
    }

    function resNumber() {
        setNumber(0)
    }

    return (
        <div className={'wrapper'}>
            <WindowCounter valueNumbers={numbers}/>
            <CleverButtons numbers={numbers} incNumbers={incNumbers} resNumbers={resNumber}/>
        </div>

    );
}

export default App;
