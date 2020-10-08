import React from "react";

type WindowPropsType ={
    startValue:number
    maxValue:number
}
function Window(props:WindowPropsType){
    return <div className={'window'}>
        <span className={props.startValue === props.maxValue ? 'max' : ''}> {props.startValue} </span>
    </div>
}

export default Window