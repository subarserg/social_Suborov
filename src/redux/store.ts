import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
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

export type AppStoreType = ReturnType<StoreType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>

export default createStore(redusers, applyMiddleware(thunk))