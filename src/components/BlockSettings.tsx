import React from "react";

export function BlockSettings() {
    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>
            <div className={'inputValues'}>
                <div className={'startValue'}>Start Value</div>
                <div><input type="number" className={'inputStart'}/></div>
            </div>
            <div className={'inputValues'}>
                <div className={'maxValue'}>Max Value</div>
                <div><input type="number" className={'inputMax'}/></div>
            </div>
        </div>
        <div className={'blockSettings'}>
            <button className={'buttons'}>Set</button>
        </div>
    </div>
}