import React from "react";

export function BlockWindow() {
    return <div className={'wrapper'}>
        <div className={'blockValues window'}>
            12
        </div>
        <div className={'blockSettings'}>
            <button className={'buttons'}>Inc</button>
            <button className={'buttons'}>Res</button>
        </div>
    </div>
}