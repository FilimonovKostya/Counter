import React, {ChangeEvent} from "react";

type InputPropsType = {
    title: string
    classNameInput: string
    classNameBlock: string
    inputValue: (value: number) => void
    value: number
    setDisabled: (boolean: boolean) => void
    startValue: number
    maxValue: number
    countValue: number
}

export function Input(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.inputValue( +e.currentTarget.value)
        props.setDisabled(false)
    }


    return  <div className={'inputValues'}>
        <div className={props.classNameBlock}> {props.title} </div>
        <input type="number" value={props.value} onChange={onChangeHandler} className={props.classNameInput}/>
    </div>
}