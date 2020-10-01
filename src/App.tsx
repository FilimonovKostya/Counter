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
        <div className={'app'}>
            <div className={'wrapper'}>
                <WindowCounter valueNumbers={numbers}/>
                <CleverButtons numbers={numbers} incNumbers={incNumbers} resNumbers={resNumber}/>
            </div>
            <Settings/>
        </div>

    );
}

function Settings() {
    return <div className={'wrapper'}>

        <div className={'incReset settings'}>

            <div className={'valueInput'}>
                <span>Max value : </span>
                <input type="number"/>
            </div>

            <div className={'valueInput'}>
                <span>Min value : </span>
                <input type="number"/>
            </div>
        </div>

        <div className={'incReset'}>
            <button className={'incRes'}>SET</button>
        </div>
    </div>
}

export default App;
