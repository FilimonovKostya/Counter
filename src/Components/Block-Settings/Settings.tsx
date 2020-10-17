import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "../WindowCounter/CleverButtons";


type SettingsPropsType = {
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    startValue: number
    maxValue: number
    settings:() => void
}

export function Settings(props: SettingsPropsType) {

    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs title={'Start Value'} valueInput={props.setStartValue} value={props.startValue}/>
            <Inputs title={'Max Value'} valueInput={props.setMaxValue} value={props.maxValue}/>

        </div>

        <div className={'incReset'}>
            <CleverButtons title={'Set'} incAndRes={props.settings}/>
        </div>
    </div>
}

