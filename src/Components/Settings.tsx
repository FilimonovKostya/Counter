import React, {ChangeEvent} from "react";

type SettingsPropsType = {
    numbers: number
    getMaxValue: (value: any) => void
}

export function Settings(props: SettingsPropsType) {

    function changeValue(e:ChangeEvent<HTMLInputElement>) {
        props.getMaxValue(e.currentTarget.value)
    }

    return <div className={'wrapper'}>

        <div className={'incReset settings'}>

            <div className={'valueInput'}>
                <span>Max value : </span>
                <input type="number" value={props.numbers} onChange={changeValue}/>
            </div>

            <div className={'valueInput'}>
                <span>Min value : </span>
                <input type="number"/>
            </div>
        </div>

        <div className={'incReset'}>
            <button className={'incRes'}>Set</button>
        </div>
    </div>
}