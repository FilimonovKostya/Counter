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


    return <div className={'wrapper'}>
        <Window startValue={props.startValue} count={props.count} maxValue={props.maxValue}/>

        <div className={'incReset'}>

            <CleverButtons title={'Inc'}
                           incAndRes={props.incNumber}
                           disabled={props.count === props.maxValue} startValue={props.count}
                           maxValue={props.maxValue}
            />
            <CleverButtons title={'Reset'}
                           incAndRes={props.resNumber}
                           disabled={props.count <= props.startValue}
                           startValue={props.count}
                           maxValue={props.maxValue}
            />


        </div>

    </div>
}

export default WindowCounter