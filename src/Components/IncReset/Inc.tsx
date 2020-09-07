import React from "react";

type PropsType = {
    addNumbers: () => void
    value: number
}


export function Inc(props: PropsType) {

    let max = {
        border: props.value === 5 ? '3px solid red' : 'none',
        backgroundColor: '#35b8e5',
        borderRadius: '10px',
        padding: '15px 30px',
        fontSize: '40px',
        outline: 'none',
        cursor: 'pointer',
    }

    if (props.value === 5) return <button disabled={true} style={max}  onClick={() => props.addNumbers()}>Inc</button>
    else return <button className={'inc'} style={max} onClick={() => props.addNumbers()}>Inc</button>
}