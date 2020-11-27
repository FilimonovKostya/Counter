import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";
import {useDispatch, useSelector} from "react-redux";
import {incrementAC, resetAC} from "../Redux/countReducer";
import {RootStoreType} from "../Redux/redux-store";


export function BlockWindow() {

    const action = useDispatch()

    const onClickHandlerInc = () => action(incrementAC())

    const onClickHandlerRes = () => action(resetAC())


    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    const maxValue = useSelector<RootStoreType, number>(state => state.count.maxValue)
    const startValue = useSelector<RootStoreType, number>(state => state.count.startValue)

    return <div className={'wrapper'}>

        <WindowCounter/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'} disable={countValue >= maxValue } onClickHandler={onClickHandlerInc}/>
            <CleverButtons title={'Res'} disable={countValue <= startValue } onClickHandler={onClickHandlerRes}/>

        </div>
    </div>
}

