import { combineReducers } from "redux";
import { authReducer } from "./auth/slice";
import { filmsReducer } from "./films/slice";

export const rootReducer = combineReducers({
    auth: authReducer,
    films: filmsReducer
})