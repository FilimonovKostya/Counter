import React from 'react';
import Window from "./Window";
import CleverButtons from './CleverButtons';


type WindowCounterPropsType = {
    resNumber: () => void
    incNumber: () => void
    startValue: number
    maxValue: number
}

function WindowCounter(props: WindowCounterPropsType) {
    return <div className={'wrapper'}>
        <Window startValue={props.startValue} maxValue={props.maxValue}/>

        <div className={'incReset'}>
            <CleverButtons title={'Inc'} incAndRes={props.incNumber} startValue={props.startValue}/>
            <CleverButtons title={'Reset'} incAndRes={props.resNumber} maxValue={props.maxValue}/>
        </div>

    </div>
}

export default WindowCounter