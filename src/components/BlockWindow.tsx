import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";

// type BlockWindowPropsType = {
//     startValue:number
// }

export function BlockWindow() {
    return <div className={'wrapper'}>

        <WindowCounter/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'}/>
            <CleverButtons title={'Res'}/>

        </div>
    </div>
}

