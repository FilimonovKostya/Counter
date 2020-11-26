import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {changedStartValueAC} from "../Redux/incOrResReducer";

type InputPropsType = {
    title: string
    classNameInput: string
    classNameBlock: string
    value: number
}

export function Input(props: InputPropsType) {
    const action = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        action(changedStartValueAC(+e.currentTarget.value))
    }

    return <div className={'inputValues'}>
        <div className={props.classNameBlock}> {props.title} </div>
        <input type="number" value={props.value} onChange={onChangeHandler} className={props.classNameInput}/>
    </div>
}