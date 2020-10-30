import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";

export function BlockSettings() {
    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>

            <Input title={'Start Value'} classNameInput={'inputStart'} classNameBlock={'startValue'}/>
            <Input title={'Max Value'} classNameInput={'inputMax'} classNameBlock={'maxValue'}/>

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'}/>

        </div>
    </div>
}


