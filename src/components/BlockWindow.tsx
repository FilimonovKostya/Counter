import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";

type BlockWindowPropsType = {
    inc: () => void
    res: () => void
    inputStartValue: number
    count: number
    setDisabled: (boolean: boolean) => void
    disabled: boolean
}

export function BlockWindow(props: BlockWindowPropsType) {


    return <div className={'wrapper'}>

        <WindowCounter startValue={props.inputStartValue} count={props.count}/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'} settings={props.inc} setDisabled={props.setDisabled} disabled={props.disabled}/>
            <CleverButtons title={'Res'} settings={props.res} setDisabled={props.setDisabled} disabled={props.disabled}/>

        </div>
    </div>
}

