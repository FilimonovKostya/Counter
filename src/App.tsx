import React from 'react';
import './App.css';
import {BlockSettings} from "./components/BlockSettings";
import {BlockWindow} from "./components/BlockWindow";
import {useSelector} from "react-redux";
import {RootStoreType} from "./Redux/redux-store";


function App() {

    const [disabled,setDisabled] = React.useState(false)

    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    const maxValue = useSelector<RootStoreType, number>(state => state.count.maxValue)
    const startValue = useSelector<RootStoreType, number>(state => state.count.startValue)

    return <div className={'App'}>
        <BlockSettings setDisabled={setDisabled} startValue={startValue} maxValue={maxValue}/>
        <BlockWindow disabled={disabled} startValue={startValue} maxValue={maxValue} countValue={countValue}/>
    </div>
}

export default App