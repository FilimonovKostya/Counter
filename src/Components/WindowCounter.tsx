import React from "react";

type PropsType = {
    number: number
}

export function WindowCounter(props: PropsType){

let styleWindow = {
    height: '200px',
    width: '480px',
    borderRadius: '10px',
    margin: '10px auto',
    backgroundColor: '#7cd3f1',
    fontSize: '72px',
    lineHeight: '200px',
}

let changeColor={
    color: props.number >= 5 ? 'red' : ''
}

return <div style={styleWindow}><span style={changeColor}> {props.number} </span></div>
}
