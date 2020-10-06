import React from 'react';
import Window from "./Window";
import CleverButtons from "../Block-Settings/CleverButtons";

type WindowCounterPropsType = {
    incNumbers:() => void
    resNumbers:() => void
    startValue:number
}
function WindowCounter(props: WindowCounterPropsType) {
    return <div className={'wrapper'}>
        <Window startValue={props.startValue} />

        <div className={'incReset'}>
            <CleverButtons title={'Inc'} incOrReset={props.incNumbers}/>
            <CleverButtons title={'Reset'} incOrReset={props.resNumbers}/>
        </div>

    </div>
}

export default WindowCounter