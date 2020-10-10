import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"

import { registerReducer } from "../reducers/registerReducer"
import { userReducer } from "../reducers/userReducers"
import { requestUserReducer } from "../reducers/requestUser"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const reducers = combineReducers({
  auth: userReducer,
  userRegister: registerReducer,
  requestUser: requestUserReducer,
})

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
)
