import {changedMaxValueAC, changedStartValueAC, countReducer, incrementAC, initialStateType, resetAC, setValuesAC} from "./countReducer";


let initialState: initialStateType

beforeEach(()=>{

    const startValue = 2

    initialState = {
        startValue: startValue,
        countValue: startValue,
        maxValue: 5,
    }


})

test('Increment countValue + 1', () => {

    const resultState = countReducer(initialState, incrementAC())

    console.log(resultState)

    expect(resultState.countValue).toBe(3) // это впервую очередь смотрим
    expect(resultState.startValue).toBe(2)
    expect(resultState.maxValue).toBe(5)


})


test('Reset countValue on startValue', () => {

    const resultState = countReducer(initialState, resetAC())

    console.log(resultState)

    expect(resultState.countValue === resultState.startValue).toBeTruthy() // впервую очередь чекаем
    expect(resultState.startValue).toBe(2)
    expect(resultState.maxValue).toBe(5)

})

test('Changed input startValue', () => {

    const resultState = countReducer(initialState, changedStartValueAC( 8 ))

    expect(resultState.startValue).toBe(8)
    expect(resultState.maxValue).toBe(5)
    expect(resultState.countValue).toBe(2)
})

test('Changed input maxValue', () => {

    const resultState = countReducer(initialState, changedMaxValueAC( 30 ))

    expect(resultState.startValue).toBe(2)
    expect(resultState.maxValue).toBe(30)
    expect(resultState.countValue).toBe(2)
})

test('Return startValue on press button SET', () => {

    const resultState = countReducer(initialState, setValuesAC( ))

    expect(resultState.startValue).toBe(2)
    expect(resultState.countValue).toBe(2)
    expect(resultState.maxValue).toBe(5)
})
