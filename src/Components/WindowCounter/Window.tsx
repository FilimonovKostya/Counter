import React from "react";

type WindowPropsType ={
    startValue:number
}
function Window(props:WindowPropsType){
    return <div className={'window'}>
        <span> {props.startValue} </span>
    </div>
}

export default Window