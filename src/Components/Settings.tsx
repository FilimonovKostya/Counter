import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    numbers: number
    getMaxValue: (value: number) => void
}

export function Settings(props: SettingsPropsType) {

    let [inputValue, setInputValue] = useState<number>(0)

    function changeValue(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(+e.currentTarget.value)
    }

    function set() {
        props.getMaxValue(inputValue)
    }

    return <div className={'wrapper'}>

        <div className={'incReset settings'}>

            <div className={'valueInput'}>
                <span>Start value : </span>
                <input type="number" value={inputValue} onChange={changeValue}/>
            </div>

            <div className={'valueInput'}>
                <span>Max value : </span>
                <input type="number"/>
            </div>
        </div>

        <div className={'incReset'}>
            <button className={'incRes'} onClick={set}>Set</button>
        </div>
    </div>
}