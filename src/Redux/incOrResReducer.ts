export type initialStateType = {
    startValue: number
    maxValue: number
}

const initialState: initialStateType = {
    startValue: 2,
    maxValue: 10
}

type ActionType =
    ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof changedStartValueAC>
    | ReturnType<typeof changedMaxValueAC>

export const incOrResReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                startValue: state.startValue + 1
            }
        case "DECREMENT":
            return {
                ...state,
                startValue: state.startValue - 1
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
    return {type: 'INCREMENT'} as const
}

export const resetAC = () => {
    return {type: 'DECREMENT'} as const
}

export const changedStartValueAC = (startValue: number) => {
    return {type: 'CHANGE-START-VALUE', startValue} as const
}

export const changedMaxValueAC = (maxValue: number) => {
    return {type: 'CHANGE-MAX-VALUE', maxValue} as const
}