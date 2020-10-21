import React from 'react';

type CleverButtonsPropsType = {
    incAndRes:() => void
    title:string
    startValue:number
    maxValue:number
}

function CleverButtons(props: CleverButtonsPropsType) {

    return <button className={'incRes'} disabled={props.startValue >= props.maxValue} onClick={props.incAndRes}> {props.title} </button>

}

export default CleverButtons;