import React, {ChangeEvent} from "react";


type InputPropsType = {
    title: string
    valueInput: (value: number) => void
    value: number
    checkValue:boolean
}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.valueInput(+e.currentTarget.value)
    }

    return <div className={'valueInput'}>
        <span> {props.title} </span>
        <input type="number" className={props.checkValue ? 'error' : ''} value={props.value} onChange={onChangeHandler}/>
    </div>

}