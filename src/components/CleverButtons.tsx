import React from "react";

type CleverButtonsPropsType = {
    title: string
    onClickHandler: () => void
    disable: boolean
}

export const CleverButtons = React.memo((props: CleverButtonsPropsType) => {
    return <button className={'buttons'} disabled={props.disable} onClick={() => props.onClickHandler()}>{props.title}</button>
})