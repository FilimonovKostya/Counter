import React from "react";

type PropsType = {

    startValue: number
    maxValue:number
}

function WindowCounter(props: PropsType) {
    return <div className={'window'}>
        <span >{props.startValue}</span>
    </div>
}

export default WindowCounter