import SnackbarReducer from "./Snackbar";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    snackbar: SnackbarReducer
})
export default rootReducer;