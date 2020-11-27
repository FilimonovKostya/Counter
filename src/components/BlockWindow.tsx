import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";
import {useDispatch} from "react-redux";
import { incrementAC, resetAC} from "../Redux/countReducer";


export function BlockWindow() {

    const action = useDispatch()

    const onClickHandlerInc = () => {
        action(incrementAC())
    }

    const onClickHandlerRes = () => {
        action(resetAC())
    }

    return <div className={'wrapper'}>

        <WindowCounter/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'} onClickHandler={onClickHandlerInc}/>
            <CleverButtons title={'Res'} onClickHandler={onClickHandlerRes}/>

        </div>
    </div>
}

