import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";
import {useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";
import {initialStateType} from "../Redux/incOrResReducer";

export function BlockSettings() {

    const startValue = useSelector<RootStoreType, initialStateType>(state => state.incrementOrReset)
    const maxValue = useSelector<RootStoreType, initialStateType>(state => state.incrementOrReset)

    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>

            <Input title={'Start Value'} classNameInput={'inputStart'} classNameBlock={'startValue'} value={startValue.startValue}/>
            <Input title={'Max Value'} classNameInput={'inputMax'} classNameBlock={'maxValue'} value={maxValue.maxValue}/>

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'}/>

        </div>
    </div>
}


