import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";
import {changedMaxValueAC, changedStartValueAC, setValuesAC} from "../Redux/countReducer";

export function BlockSettings() {

    const startValue = useSelector<RootStoreType, number>(state => state.count.startValue)
    const maxValue = useSelector<RootStoreType, number>(state => state.count.maxValue)


    const action = useDispatch()

    const onChangeHandlerStart = (inputValue: number) => {
        action(changedStartValueAC(inputValue))
    }

    const onChangeHandlerMax = (inputValue: number) => {
        action(changedMaxValueAC(inputValue))
    }

    const setCallback = () => {
        action(setValuesAC())
    }

    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>

            <Input title={'Start Value'}
                   classNameInput={'inputStart'}
                   onChangeCallback={onChangeHandlerStart}
                   classNameBlock={'startValue'}
                   value={startValue}/>

            <Input title={'Max Value'}
                   classNameInput={'inputMax'}
                   onChangeCallback={onChangeHandlerMax}
                   classNameBlock={'maxValue'}
                   value={maxValue}/>

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'}
                           disable={startValue === maxValue || startValue > maxValue || startValue < 0 || maxValue <= 0}
                           onClickHandler={setCallback}/>

        </div>
    </div>
}


