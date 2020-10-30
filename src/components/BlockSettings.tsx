import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";

type BlockSettingsPropsType = {
    setInputStartValue: (value: number) => void
    setInputMaxValue: (value: number) => void
    startValue: number
    maxValue: number
    set: () => void
    disabled: boolean
    setDisabled: (boolean: boolean) => void
    count:number
}

export function BlockSettings(props: BlockSettingsPropsType) {
    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>

            <Input title={'Start Value'}
                   classNameInput={'inputStart'}
                   classNameBlock={'startValue'}
                   inputValue={props.setInputStartValue}
                   value={props.startValue}
                   setDisabled={props.setDisabled}
            />

            <Input title={'Max Value'}
                   classNameInput={'inputMax'}
                   classNameBlock={'maxValue'}
                   inputValue={props.setInputMaxValue}
                   value={props.maxValue}
                   setDisabled={props.setDisabled}
            />

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'}
                           settings={props.set}
                           setDisabled={props.setDisabled}
                           disabled={props.disabled}
                           maxValue={props.maxValue}
                           count={props.count}
            />

        </div>
    </div>
}


