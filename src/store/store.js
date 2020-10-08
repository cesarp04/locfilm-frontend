import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { userReducer } from "../reducers/userReducers"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const reducers = combineReducers({
  initialState: userReducer,
})

const middleware = [thunk]

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)
