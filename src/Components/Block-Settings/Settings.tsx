import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "../WindowCounter/CleverButtons";


type SettingsPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    set: () => void
    maxValue: number
    startValue: number

}

export function Settings(props: SettingsPropsType) {

    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs inputName={'Start value'} startAndMaxValue={props.setStartValue} maxAndStart={props.startValue}/>
            <Inputs inputName={'Max value'} startAndMaxValue={props.setMaxValue} maxAndStart={props.maxValue}/>

        </div>

        <div className={'incReset'}>
           <CleverButtons title={'Set'} set={props.set} />
        </div>
    </div>
}

