import React from "react";

type PropsType = {
    removeNumbers: () => void
    value: number
}

export function Reset(props: PropsType) {

    let min = {
        border: props.value === 0 ? '3px solid red' : 'none',
        backgroundColor: '#35b8e5',
        borderRadius: '10px',
        padding: '15px 30px',
        fontSize: '40px',
        outline: 'none',
        cursor: 'pointer',
    }

    if (props.value === 0) return <button disabled={true} style={min} onClick={() => props.removeNumbers()}>Reset</button>
    else return <button disabled={false} style={min} onClick={() => props.removeNumbers()}>Reset</button>

}