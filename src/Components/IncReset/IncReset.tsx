import React from "react";
import {Inc} from "./Inc";
import {Reset} from "./Reset";



type PropsType={
    addNumbers:() => void
    removeNumbers:() => void
    value:number
}

export function IncReset(props:PropsType) {

    return <div className={'incReset'}>
        <Inc addNumbers={props.addNumbers} value={props.value}  removeNumbers={props.removeNumbers} />
        {/*<Reset removeNumbers={props.removeNumbers} value={props.value}/>*/}
    </div>
}

