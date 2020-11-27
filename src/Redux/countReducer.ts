export type initialStateType = {
    startValue: number
    maxValue: number
    countValue:number
}

const initialState: initialStateType = {
    startValue: 1,
    maxValue: 5,
    countValue: 1
}

type ActionType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changedStartValueAC>
    | ReturnType<typeof changedMaxValueAC>

export const countReducer = (state= initialState, action: ActionType): initialStateType => {
    debugger
    switch (action.type) {
        case "INCREMENT-VALUE":
            return {
                ...state,
                countValue:state.startValue + 1,

            }
        case "RESET-VALUE":
            return {
                ...state,
                countValue: state.startValue
            }
        case "CHANGE-START-VALUE":
            return {
                ...state,
                startValue: action.startValue
            }
        case "CHANGE-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state
    }
}


export const incrementAC = () => {
    return {type: 'INCREMENT-VALUE'} as const
}

export const resetAC = () => {
    return {type: 'RESET-VALUE'} as const
}

export const changedStartValueAC = (startValue: number) => {
    return {type: 'CHANGE-START-VALUE', startValue} as const
}

export const changedMaxValueAC = (maxValue: number) => {
    return {type: 'CHANGE-MAX-VALUE', maxValue} as const
}