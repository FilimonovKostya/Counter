import React, {ChangeEvent} from "react";

type InputPropsType = {
    inputName: string
    getAllValue:(value:number) => void
    values:number
}


export function Inputs(props: InputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.getAllValue(+e.currentTarget.value)
    }

    return <div className={'valueInput'}>
        <span> {props.inputName} </span>
        <input type="number" value={props.values} onChange={onChangeHandler}/>
    </div>

}