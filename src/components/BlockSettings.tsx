import React from "react";
import {Input} from "./Input";
import {CleverButtons} from "./CleverButtons";
import {useDispatch} from "react-redux";
import {changedMaxValueAC, changedStartValueAC, setValuesAC} from "../Redux/countReducer";

type BlockSettingsPropsType = {
    setDisabled: (boolean: boolean) => void
    startValue: number
    maxValue: number
}

export const BlockSettings = React.memo((props: BlockSettingsPropsType) => {

    const action = useDispatch()

    const onChangeHandlerStart = (inputValue: number) => action(changedStartValueAC(inputValue))

    const onChangeHandlerMax = (inputValue: number) => action(changedMaxValueAC(inputValue))

    const setCallback = () => {
        action(setValuesAC())
        props.setDisabled(false)
    }

    const incorrectValue = 'Incorrect Value'
    const condition = props.startValue < 0 || props.startValue > props.maxValue || props.startValue === props.maxValue ? incorrectValue : ''

    return <div className={'wrapper'}>
        <div className={'blockValues settings'}>

            <Input title={'Start Value'}
                   classNameInput={'inputStart'}
                   onChangeCallback={onChangeHandlerStart}
                   classNameBlock={'startValue'}
                   value={props.startValue}
                   setDisabled={props.setDisabled}
                   checkCondition={condition}
            />

            <Input title={'Max Value'}
                   classNameInput={'inputMax'}
                   onChangeCallback={onChangeHandlerMax}
                   classNameBlock={'maxValue'}
                   value={props.maxValue}
                   setDisabled={props.setDisabled}
                   checkCondition={condition}
            />

        </div>

        <div className={'blockSettings'}>

            <CleverButtons title={'Set'}
                           disable={props.startValue === props.maxValue
                           || props.startValue > props.maxValue
                           || props.startValue < 0
                           || props.maxValue < 0}
                           onClickHandler={setCallback}/>

        </div>
    </div>
})


