import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../Redux/redux-store";
import {changedMaxValueAC, changedStartValueAC, initialStateType, setValuesAC} from "../Redux/countReducer";

export function BlockSettings() {

    const startValue = useSelector<RootStoreType, initialStateType>(state => state.count)
    const maxValue = useSelector<RootStoreType, initialStateType>(state => state.count)



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
                   value={startValue.startValue}/>

            <Input title={'Max Value'}
                   classNameInput={'inputMax'}
                   onChangeCallback={onChangeHandlerMax}
                   classNameBlock={'maxValue'}
                   value={maxValue.maxValue}/>

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'} onClickHandler={setCallback}/>

        </div>
    </div>
}


