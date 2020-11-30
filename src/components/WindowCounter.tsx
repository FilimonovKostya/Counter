import React from "react";
import {useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";




export function WindowCounter() {
    const error= 'error'
    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    return <div className={'blockValues window'}>
        {countValue < 2 ? error : countValue}
    </div>
}