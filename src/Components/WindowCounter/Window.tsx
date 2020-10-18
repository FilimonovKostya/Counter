import React, {useState} from "react";

type WindowPropsType = {
    startValue: number
    maxValue: number
    count:number
}

function Window(props: WindowPropsType) {
    const [error, setError] = useState('Incorrect ') // показ ошибки в окне счетчика

    return <div className={'window'}><span> {props.count >= props.maxValue || props.count < 0 ? error : props.count} </span>
    </div>

}

export default Window