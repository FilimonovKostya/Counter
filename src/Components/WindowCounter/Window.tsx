import React, {useState} from "react";

type WindowPropsType = {
    startValue: number
    maxValue: number
}

function Window(props: WindowPropsType) {
    const [error, setError] = useState('Incorrect ')

    return <div className={'window'}><span> {props.startValue > props.maxValue || props.startValue < 0 ? error : props.startValue} </span>
    </div>

}

export default Window