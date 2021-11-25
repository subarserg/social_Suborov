import { combineReducers, createStore } from "redux"
import dialogReduser from "./dialog_reduser"
import profileReduser from "./profile_reduser"
import usersReduser from "./users_reduser"

const redusers = combineReducers({
    profileReduser,
    dialogReduser,
    usersReduser
})


export default createStore(redusers)