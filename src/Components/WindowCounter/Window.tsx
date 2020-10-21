import React from "react";

type WindowPropsType = {
    startValue: number
    maxValue: number
    count: number
}

function Window(props: WindowPropsType) {

    return <div className={'window'}><span
        className={props.count >= props.maxValue ? 'max' : ''}> {props.startValue < props.maxValue && props.count} </span>
    </div>

}

export default Window