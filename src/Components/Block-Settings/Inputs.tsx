import React, {ChangeEvent} from "react";
import {Simulate} from "react-dom/test-utils";


type InputPropsType = {
    title: string
    valueInput: (value: number) => void
    value: number

}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.valueInput(+e.currentTarget.value)

    }

    return <div className={'valueInput'}>
        <span> {props.title} </span>
        <input type="number" value={props.value}  onChange={onChangeHandler}/>
    </div>

}