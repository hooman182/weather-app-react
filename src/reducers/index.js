import { combineReducers } from "redux"
import tempValueReducer from "./tempValueReducer"
import fetchDataReducer from "./fetchDataReducer"

const rootReducers = combineReducers({
    data: fetchDataReducer,
    temp: tempValueReducer
})

export default rootReducers