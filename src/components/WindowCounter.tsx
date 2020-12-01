import React from "react";


type WindowCounterPropsType = {
    countValue:number
    maxValue:number
}

export const WindowCounter = React.memo( (props:WindowCounterPropsType) => {
    const error= 'error'
    return <div className={'blockValues window'}>
        <span className={props.countValue < props.maxValue ? 'startValue' : 'maxValue'}>{props.countValue}</span>
    </div>
})