import { combineReducers, createStore } from "redux";
import {incOrResReducer} from "./incOrResReducer";


const rootReducer = combineReducers({
    incrementOrReset:incOrResReducer,
})

export const store = createStore(rootReducer)

export type RootStoreType = ReturnType<typeof rootReducer>