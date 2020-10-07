import React from 'react';
import Window from "./Window";
import CleverButtons from "../Block-Settings/CleverButtons";

type WindowCounterPropsType = {
    resNumber:()=>void
    incNumber:()=>void
    startValue:number
}
function WindowCounter(props: WindowCounterPropsType) {
    return <div className={'wrapper'}>
        <Window  startValue={props.startValue}/>

        <div className={'incReset'}>
            <CleverButtons title={'Inc'}  incAndRes={props.incNumber}/>
            <CleverButtons title={'Reset'}  incAndRes={props.resNumber}/>
        </div>

    </div>
}

export default WindowCounter