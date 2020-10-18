import React, {useState} from "react";

type WindowPropsType = {
    startValue: number
    maxValue: number
}

function Window(props: WindowPropsType) {
    const [error, setError] = useState('Incorrect ')

    if (props.startValue > props.maxValue || props.startValue < 0) {
        return <div className={'window'}>
            <span>{error}</span>
        </div>

    } else {
        return <div className={'window'}>
            <span> {props.startValue} </span>
        </div>
    }

    // return <div className={'window'}>
    //     <span > {} </span>
    // </div>
}

export default Window