import React from 'react';

type CleverButtonsPropsType = {
    incAndRes:() => void
    title:string
}

function CleverButtons(props: CleverButtonsPropsType) {

    return <button className={'incRes'}  onClick={props.incAndRes}> {props.title} </button>

}

export default CleverButtons;