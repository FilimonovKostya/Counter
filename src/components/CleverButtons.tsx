import React from "react";

type CleverButtonsPropsType = {
    title:string
}

export function CleverButtons(props:CleverButtonsPropsType) {
    return <button className={'buttons'}>{ props.title }</button>
}