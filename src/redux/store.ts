import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk, {ThunkAction} from "redux-thunk"
import dialogReduser from "./dialog_reduser"
import profileReduser from "./profile_reduser"
import usersReduser from "./users_reduser"
import authReduser from "./auth_reduser"

const redusers = combineReducers({
    profileReduser,
    dialogReduser,
    usersReduser,
    authReduser
})


type StoreType = typeof redusers
export type AppStateType = ReturnType<StoreType>

export type InferActionType<T> = T extends {[key : string]: (...arg: any[])=> infer U} ? U : never
export type BaseThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, AppStateType, unknown, A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(redusers, composeEnhancers(applyMiddleware(thunk)))



