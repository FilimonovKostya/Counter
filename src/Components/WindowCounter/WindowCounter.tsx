import React from 'react';
import Window from "./Window";
import CleverButtons from './CleverButtons';


type WindowCounterPropsType = {
    startValue: number
    maxValue: number
    incNumber: () => void
    resNumber: () => void
    count: number
}

function WindowCounter(props: WindowCounterPropsType) {
    // const checkIncValue = props.count >= props.maxValue || props.startValue >= props.maxValue || props.startValue <= 0
    // const checkResetValue = props.count <= props.startValue || props.startValue >= props.maxValue || props.maxValue <= 0

    const checkIncValue = props.startValue < 0 || props.startValue >= props.maxValue || props.count >= props.maxValue
    const checkResetValue = props.maxValue <= 0 || props.count <= props.startValue


    return <div className={'wrapper'}>
        <Window startValue={props.startValue} count={props.count} maxValue={props.maxValue}/>

        <div className={'incReset'}>

            <CleverButtons title={'Inc'}
                           incAndRes={props.incNumber}
                           disabled={checkIncValue}
                           startValue={props.count}
                           maxValue={props.maxValue}
            />
            <CleverButtons title={'Reset'}
                           incAndRes={props.resNumber}
                           disabled={checkResetValue}
                           startValue={props.count}
                           maxValue={props.maxValue}
            />


        </div>

    </div>
}

export default WindowCounter