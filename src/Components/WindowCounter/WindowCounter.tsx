import React from 'react';
import Window from "./Window";
import CleverButtons from './CleverButtons';


type WindowCounterPropsType = {
    startValue: number
    maxValue:number
    incNumber: () => void
    resNumber: () => void
    count:number
}

function WindowCounter(props: WindowCounterPropsType) {


    return <div className={'wrapper'}>
        <Window startValue={props.startValue} count={props.count} maxValue={props.maxValue}/>

        <div className={'incReset'}>
            <CleverButtons title={'Inc'} incAndRes={props.incNumber}/>
            <CleverButtons title={'Reset'} incAndRes={props.resNumber}/>
        </div>

    </div>
}

export default WindowCounter