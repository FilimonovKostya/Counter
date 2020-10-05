import React from 'react';
import './App.css';
import {Settings} from "./Components/Block-Settings/Settings";
import WindowCounter from "./Components/WindowCounter/WindowCounter";

function App() {
    return <div className={'app'}>
        <Settings/>
      <WindowCounter/>
    </div>
}

export default App;
