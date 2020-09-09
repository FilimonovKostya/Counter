import React from "react";

type PropsType = {
    incNumbers: () => void
    ResNumber: () => void
    value: number
}

function IncReset(props: PropsType) {
    return <div className={'incReset'}>
        <button className={props.value < 5 ? 'inc' : `inc error`}
                onClick={props.incNumbers}
                disabled={props.value === 5}>Inc</button>

        <button className={props.value > 0 ? 'inc' : 'inc error'}
                onClick={props.ResNumber}
                disabled={props.value < 1}>Reset</button>

    </div>
}

export default IncReset