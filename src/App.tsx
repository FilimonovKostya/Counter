import React from 'react';
import './App.css';
import {BlockSettings} from "./components/BlockSettings";
import {BlockWindow} from "./components/BlockWindow";


function App() {

    const [disabled,setDisabled] = React.useState(false)

    return <div className={'App'}>
        <BlockSettings setDisabled={setDisabled}/>
        <BlockWindow disabled={disabled}/>
    </div>
}

export default App