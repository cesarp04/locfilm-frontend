import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"

import { registerReducer } from "../reducers/registerReducer"
import { userReducer } from "../reducers/userReducers"
import { requestUserReducer } from "../reducers/requestUser"
import { updateUserReducer } from "../reducers/updateUserReducer"
import { locationsReducer } from "../reducers/locationsReducer"
import { reservationReducer } from "../reducers/reservationReducer"

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const reducers = combineReducers({
  auth: userReducer,
  userRegister: registerReducer,
  requestUser: requestUserReducer,
  updateUser: updateUserReducer,
  locations: locationsReducer,
  makeReservation: reservationReducer,
})

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
)
