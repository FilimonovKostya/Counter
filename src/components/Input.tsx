import React, {ChangeEvent} from "react";


type InputPropsType = {
    title: string
    classNameInput: string
    classNameBlock: string
    value: number
    onChangeCallback: (inputValue: number) => void
    setDisabled:(boolean: boolean) => void
}

export function Input(props: InputPropsType) {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setDisabled(true)
        props.onChangeCallback(+e.currentTarget.value)
    }



    return <div className={'inputValues'}>
        <div className={props.classNameBlock}> {props.title} </div>
        <input type="number" value={props.value} onChange={onChangeHandler} className={props.classNameInput}/>
    </div>
}