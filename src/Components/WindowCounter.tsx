import React from "react";

type PropsType = {
    valueNumbers: number
}

function WindowCounter(props: PropsType) {
    return <div className={'window'}>
        <span>{props.valueNumbers}</span>
    </div>
}

export default WindowCounter