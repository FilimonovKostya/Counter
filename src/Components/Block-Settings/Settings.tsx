import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "./CleverButtons";

type SettingsPropsType = {
    getMaxValue: (value: number) => void
    getStartValue: (value: number) => void
    startValue:number
    maxValue:number
}

export function Settings(props: SettingsPropsType) {

    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs inputName={'Start value'} getAllValue={props.getStartValue} values={props.startValue}/>
            <Inputs inputName={'Max value'} getAllValue={props.getMaxValue} values={props.maxValue}/>

        </div>
        <div className={'incReset'}>
            <CleverButtons title={'Set'}/>
        </div>
    </div>
}

