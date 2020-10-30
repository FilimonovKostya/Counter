import React from "react";

type WindowCounterPropsType = {
    startValue:number
    count:number
}

export function WindowCounter(props:WindowCounterPropsType) {
    return <div className={'blockValues window'}>  {props.count}  </div>
}