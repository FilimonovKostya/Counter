import React from "react";

type WindowPropsType = {
    startValue: number
    maxValue: number
    count: number
}

function Window(props: WindowPropsType) {
    const checkInputsValue = props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0
    const [error, setError] = React.useState('Enter Value')

    return <div className={'window'}><span
        className={props.count >= props.maxValue ? 'max' : ''}> {checkInputsValue ? error : props.count} </span>
    </div>

}

export default Window