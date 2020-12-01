export type initialStateType = {
    startValue: number
    maxValue: number
    countValue: number
}

const initialState: initialStateType = {
    startValue: 2 || localStorage.getItem('start'),
    maxValue: 5,
    countValue: 1,
}

type ActionType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changedStartValueAC>
    | ReturnType<typeof changedMaxValueAC>
    | ReturnType<typeof setValuesAC>


export const countReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "INCREMENT-VALUE":
            return {
                ...state,
                countValue: state.countValue + 1,
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
        case "SET-VALUES":
            return {
                ...state,
                countValue: state.startValue,
                maxValue: state.maxValue
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

export const setValuesAC = () => {
    return {type: 'SET-VALUES'} as const
}

