import React from "react";

type PropsType = {
    removeNumbers: () => void
    value: number
}

export function Reset(props: PropsType) {


    if (props.value === 0) return <button disabled={true} className={'reset'} onClick={() => props.removeNumbers()}>Reset</button>
    else return <button disabled={false} className={'reset'} onClick={() => props.removeNumbers()}>Reset</button>

}