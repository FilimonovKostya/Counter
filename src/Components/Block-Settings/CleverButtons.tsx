import React from 'react';

type CleverButtonsPropsType = {
    title: string
}

function CleverButtons(props: CleverButtonsPropsType) {
    return <button className={'incRes'}> {props.title} </button>

}

export default CleverButtons;