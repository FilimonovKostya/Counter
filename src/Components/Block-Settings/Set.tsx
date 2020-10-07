import React from "react";
type SerPropsType = {
    set?:() =>void
    title:string
}
function Set(props:SerPropsType){
    return <button className={'incRes'} onClick={props.set}> {props.title} </button>
}

export default Set