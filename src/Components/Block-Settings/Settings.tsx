import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "./CleverButtons";

export function Settings() {
    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs inputName={'Start Value : '}/>
            <Inputs inputName={'Max Value : '}/>

        </div>
        <div className={'incReset'}>
            <CleverButtons title={'Set'}/>
        </div>
    </div>
}

