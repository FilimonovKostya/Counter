import React from "react";
import {Inputs} from "./Inputs";
import CleverButtons from "../WindowCounter/CleverButtons";


type SettingsPropsType = {

}

export function Settings(props: SettingsPropsType) {

    return <div className={'wrapper'}>
        <div className={'incReset settings'}>

            <Inputs />
            <Inputs />

        </div>

        <div className={'incReset'}>
           <CleverButtons />
        </div>
    </div>
}

