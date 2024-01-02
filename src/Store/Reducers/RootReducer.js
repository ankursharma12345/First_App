import SnackbarReducer from "./Snackbar";
import {combineReducers} from "redux"

/* combineReducer for combining all the reducers */
const rootReducer = combineReducers({
    snackbar: SnackbarReducer
})
export default rootReducer;