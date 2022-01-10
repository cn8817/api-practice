import { combineReducers } from "redux";
import getFilmsReducer from "./getFilmsReducer";
import getFilmByIdReducer from "./getFilmByIdReducer";

const rootReducer = combineReducers({
    getFilmByIdReducer,
    getFilmsReducer
})

export default rootReducer