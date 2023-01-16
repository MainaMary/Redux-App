import { combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import users from "./users/reducer"

const rootReducer = combineReducers({
    users
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type AppDispatch = typeof Store.dispatch