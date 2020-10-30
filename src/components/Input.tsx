import React from "react";

type InputPropsType = {
    title:string
    classNameInput:string
    classNameBlock:string
}

export function Input(props:InputPropsType) {
    return <div className={'inputValues'}>
        <div className={props.classNameBlock}> {props.title} </div>
        <input type="number" className={props.classNameInput}/>
    </div>
}