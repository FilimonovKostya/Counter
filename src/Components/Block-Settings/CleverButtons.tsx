import React from 'react';

type CleverButtonsPropsType = {
    title: string
    incOrReset?:() => void
}

function CleverButtons(props: CleverButtonsPropsType) {
    return <button className={'incRes'} onClick={ props.incOrReset}> {props.title} </button>

}

export default CleverButtons;