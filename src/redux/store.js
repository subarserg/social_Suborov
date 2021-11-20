import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialog_reduser";
import profileReduser from "./profile_reduser";

const redusers = combineReducers({
    profileReduser,
    dialogReduser
})


export default createStore(redusers)