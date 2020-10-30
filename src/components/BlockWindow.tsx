import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";

type BlockWindowPropsType = {
    inc: () => void
    res: () => void
    inputStartValue: number
    inputMaxValue:number
    count: number
    setDisabled: (boolean: boolean) => void
    disabled: boolean
}

export function BlockWindow(props: BlockWindowPropsType) {



    return <div className={'wrapper'}>

        <WindowCounter startValue={props.inputStartValue} count={props.count}/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'}
                           settings={props.inc}
                           setDisabled={props.setDisabled}
                           disabled={ props.count >= props.inputMaxValue || props.disabled}
                           count={props.count}
                           maxValue={props.inputMaxValue}


            />
            <CleverButtons title={'Res'}
                           settings={props.res}
                           setDisabled={props.setDisabled}
                           disabled={props.count <= props.inputStartValue || props.disabled }
                           count={props.count}
                           maxValue={props.inputMaxValue}


            />

        </div>
    </div>
}

