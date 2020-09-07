import React from "react";

type PropsType = {
    addNumbers: () => void
    removeNumbers:() => void
    value: number
}


export function Inc(props: PropsType) {
    // if (props.value === 5) return <button disabled={true} className={'inc'}  onClick={() => props.addNumbers()}>Inc</button>
    // else return <button  className={'inc'} onClick={() => props.addNumbers()}>Inc</button>
    return (
        <div>
            <button className={props.value === 5 ? 'inc' : 'reset'}
                    onClick={()=>{if(props.value === 5){ props.removeNumbers() } else{ props.addNumbers() } }}>
                {props.value === 5 ? 'reset' : 'inc' }</button>
        </div>
    )
}