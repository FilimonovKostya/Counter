import React from "react";
import {CleverButtons} from "./CleverButtons";
import {WindowCounter} from "./WindowCounter";
import {useDispatch} from "react-redux";
import {incrementAC, resetAC} from "../Redux/countReducer";

type BlockWindowPropsType = {
    disabled:boolean
    startValue: number
    maxValue:number
    countValue:number
}

export const BlockWindow = React.memo((props:BlockWindowPropsType) => {

    const action = useDispatch()
    const onClickHandlerInc = () => action(incrementAC())
    const onClickHandlerRes = () => action(resetAC())

    return <div className={'wrapper'}>

        <WindowCounter startValue={props.startValue} countValue={props.countValue} maxValue={props.maxValue}/>

        <div className={'blockSettings'}>

            <CleverButtons title={'Inc'} disable={props.countValue >= props.maxValue || props.disabled} onClickHandler={onClickHandlerInc}/>
            <CleverButtons title={'Res'} disable={props.countValue <= props.startValue || props.disabled} onClickHandler={onClickHandlerRes}/>

        </div>
    </div>
})

