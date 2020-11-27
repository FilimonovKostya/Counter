import React from "react";
import {useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";
import {initialStateType} from "../Redux/countReducer";



export function WindowCounter() {
    const countValue = useSelector<RootStoreType, initialStateType>(state => state.count)
    console.log(countValue.countValue)
    return <div className={'blockValues window'}>
        {countValue.countValue}
    </div>
}