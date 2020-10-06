import React, {ChangeEvent} from "react";

type InputPropsType = {
    inputName: string
    inputValue:number
    setInput:(value: number) => void
}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInput(+e.currentTarget.value)
    }

    return <div className={'valueInput'}>
        <span> {props.inputName} </span>
        <input type="number" value={props.inputValue}  onChange={onChangeHandler}/>
    </div>

}