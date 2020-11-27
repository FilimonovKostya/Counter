import React from 'react';
import './App.css';
import {BlockSettings} from "./components/BlockSettings";
import {BlockWindow} from "./components/BlockWindow";


function App() {

    return <div className={'App'}>
        <BlockSettings/>
        <BlockWindow />
    </div>
}

export default App