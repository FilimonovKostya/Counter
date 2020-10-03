import React from "react";

type CleverButtonsPropsType = {
    startValue: number
    maxValue:number
    incNumbers: () => void
    resNumbers: () => void
}

function CleverButtons(props:CleverButtonsPropsType) {
    return <div className={'incReset'}>

        <button onClick={props.incNumbers}
                className={'incRes'}
                // disabled={props.startValue < props.maxValue }
        >Inc</button>

        <button onClick={props.resNumbers}
                className={'incRes'}
                // disabled={props.startValue === props.maxValue }
        >Reset</button>
    </div>
}

export default CleverButtons 