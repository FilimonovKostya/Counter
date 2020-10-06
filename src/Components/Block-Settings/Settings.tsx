import React, {useState} from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "./CleverButtons";

type SettingsPropsType = {
    getStartValue:(value: number) => void
    getMaxValue:(value: number) => void
}
export function Settings(props: SettingsPropsType) {

    const [startInputValue,setStartInputValue] = useState(0)
    const [maxInputValue,setMaxInputValue] = useState(0)



    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs inputName={'Start Value : '} inputValue={startInputValue} setInput={setStartInputValue}/>
            <Inputs inputName={'Max Value : '} inputValue={maxInputValue} setInput={setMaxInputValue}/>

        </div>
        <div className={'incReset'}>
            <CleverButtons title={'Set'}/>
        </div>
    </div>
}

