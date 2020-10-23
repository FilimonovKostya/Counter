import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "../WindowCounter/CleverButtons";


type SettingsPropsType = {
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    startValue: number
    maxValue: number
    settings: () => void
}

export function Settings(props: SettingsPropsType) {

    const checkInputsValue = props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0  // проверка условия чтобы

    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs title={'Start Value'}
                    valueInput={props.setStartValue}
                    value={props.startValue}
                    checkValue={checkInputsValue}
            />

            <Inputs title={'Max Value'}
                    valueInput={props.setMaxValue}
                    value={props.maxValue}
                    checkValue={checkInputsValue}
            />

        </div>

        <div className={'incReset'}>
            <CleverButtons title={'Set'}
                           incAndRes={props.settings}
                           maxValue={props.maxValue}
                           startValue={props.startValue}

            />
        </div>
    </div>
}

