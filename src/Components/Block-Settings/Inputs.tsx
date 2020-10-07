import React, {ChangeEvent} from "react";

type InputPropsType = {
    inputName: string
    startAndMaxValue:(value: number) => void
    maxAndStart:number
}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.startAndMaxValue(+e.currentTarget.value)
    }

    return <div className={'valueInput'}>
        <span> {props.inputName} </span>
        <input type="number" value={props.maxAndStart} onChange={onChangeHandler}/>
    </div>

}