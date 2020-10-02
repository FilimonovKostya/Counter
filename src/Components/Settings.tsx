import React from "react";

export function Settings() {
    return <div className={'wrapper'}>

        <div className={'incReset settings'}>

            <div className={'valueInput'}>
                <span>Max value : </span>
                <input type="number"/>
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