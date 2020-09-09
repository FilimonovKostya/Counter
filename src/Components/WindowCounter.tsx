import React from "react";

type PropsType = {
    valueNumbers: number
}

function WindowCounter(props: PropsType) {
    return <div className={'window'}>
        <span className={props.valueNumbers === 5 ? 'max' : ''}>{props.valueNumbers}</span>
    </div>
}

export default WindowCounter