import React from "react";

type CleverButtonsPropsType = {
    title:string
    settings:() => void
    setDisabled:(boolean: boolean) => void
    disabled:boolean
    count:number
    maxValue:number
}

export function CleverButtons(props:CleverButtonsPropsType) {

    return <button className={'buttons'} disabled={props.disabled  }  onClick={props.settings}>{ props.title }</button>

}