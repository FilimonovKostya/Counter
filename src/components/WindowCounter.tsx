import React from "react";
import {useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";




export function WindowCounter() {
    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    return <div className={'blockValues window'}>
        {countValue}
    </div>
}