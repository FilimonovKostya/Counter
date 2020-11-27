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

    const [isDisable, setIsDisable] = React.useState(false)


    const countValue = useSelector<RootStoreType, number>(state => state.count.countValue)
    const maxValue = useSelector<RootStoreType, number>(state => state.count.maxValue)

    if(countValue > maxValue) {
        setIsDisable(true)
    }



    return <div className={'wrapper'}>

        <WindowCounter/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'} disable={isDisable} onClickHandler={onClickHandlerInc}/>
            <CleverButtons title={'Res'} disable={isDisable} onClickHandler={onClickHandlerRes}/>

        </div>
    </div>
}

