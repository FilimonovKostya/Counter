import React from "react";

type CleverButtonsPropsType = {
    numbers: number
    incNumbers: () => void
    resNumbers: () => void
}

function CleverButtons(props:CleverButtonsPropsType) {
    return <div className={'incReset'}>

        <button onClick={props.incNumbers}
                className={props.numbers < 5 ? 'incRes' : 'incRes error'}
                disabled={props.numbers > 4}
        >Inc</button>

        <button onClick={props.resNumbers}
                className={props.numbers > 0 ? 'incRes' : 'incRes error'}
                disabled={props.numbers === 0}
        >Reset</button>
    </div>
}

export default CleverButtons 