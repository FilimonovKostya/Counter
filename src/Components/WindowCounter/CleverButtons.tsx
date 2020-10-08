import React from 'react';

type CleverButtonsPropsType = {
    title: string
    incAndRes?: () => void
    set?: () => void
    maxValue?: number
    startValue?: number
}

function CleverButtons(props: CleverButtonsPropsType) {

    return <button className={'incRes'}
                   onClick={props.incAndRes}>{props.title} </button>

}

export default CleverButtons;