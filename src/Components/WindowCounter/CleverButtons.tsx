import React from 'react';

type CleverButtonsPropsType = {
    incAndRes:() => void
    title:string
    startValue:number
    maxValue:number
    disabled?:boolean
}

function CleverButtons(props: CleverButtonsPropsType) {

    return <button className={'incRes'} disabled={props.disabled} onClick={props.incAndRes}> {props.title} </button>

}

export default CleverButtons;