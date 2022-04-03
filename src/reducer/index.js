import {UserDataReducer} from "./UserReducer";
import {combineReducers} from "redux";
import {GameReducer} from "./GameReducer";

export default combineReducers({
    UserDataReducer, GameReducer
})