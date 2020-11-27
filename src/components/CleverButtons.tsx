import React from "react";

type CleverButtonsPropsType = {
    title:string
    onClickHandler: () => void
}

export function CleverButtons(props:CleverButtonsPropsType) {
    return <button className={'buttons'} onClick={() => props.onClickHandler()}>{ props.title }</button>
}