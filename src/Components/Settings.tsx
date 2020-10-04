import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    getStartValue: (value: number) => void
    getMaxValue: (value: number) => void
    setPrevStartValue:any
}

export function Settings(props: SettingsPropsType) {

    let [inputStartValue, setInputStartValue] = useState<number>(0)

    function changeStartInputValue(e: ChangeEvent<HTMLInputElement>) {
      return  setInputStartValue(+e.currentTarget.value)
    }



    let [inputMaxValue, setInputMaxValue] = useState<number>(0)

    function changeMaxInputValue(e: ChangeEvent<HTMLInputElement>) {
        setInputMaxValue(+e.currentTarget.value)
    }

    function set() {
        props.getStartValue(inputStartValue)
        props.getMaxValue(inputMaxValue)
        props.setPrevStartValue([])
    }


    return <div className={'wrapper'}>

        <div className={'incReset settings'}>

            <div className={'valueInput'}>
                <span>Start value : </span>
                <input type="number" value={inputStartValue} onChange={changeStartInputValue}/>
            </div>

            <div className={'valueInput'}>
                <span>Max value : </span>
                <input type="number" value={inputMaxValue} onChange={changeMaxInputValue}/>
            </div>
        </div>

        <div className={'incReset'}>
            <button className={'incRes'} onClick={set}>Set</button>
        </div>
    </div>
}