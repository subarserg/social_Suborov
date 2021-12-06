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


export default createStore(redusers, applyMiddleware(thunk))