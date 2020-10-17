import React from 'react';
import Window from "./Window";
import CleverButtons from './CleverButtons';


type WindowCounterPropsType = {
    startValue:number
}

function WindowCounter(props: WindowCounterPropsType) {
    return <div className={'wrapper'} >
        <Window startValue={props.startValue}/>

        <div className={'incReset'}>
            <CleverButtons />
            <CleverButtons />
        </div>

    </div>
}

export default WindowCounter