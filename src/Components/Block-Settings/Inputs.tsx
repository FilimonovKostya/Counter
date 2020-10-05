import React from "react";

type InputPropsType = {
    inputName: string
}

export function Inputs(props: InputPropsType) {
    return <div className={'valueInput'}>
        <span> {props.inputName} </span>
        <input type="number"/>
    </div>

}