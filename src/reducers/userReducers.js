import {
  LOGIN_USER,
  USERS_ERROR,
  ERROR,
  REMOVE_ERROR_USER,
} from "../types/userTypes"
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from "../types/states"

const token = localStorage.getItem("token")
const id = localStorage.getItem("id")

const initialState = {
  status: token && id ? SUCCESS_STATUS : IDLE_STATUS,
  user: token && id ? { token, id } : {},
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        status: SUCCESS_STATUS,
      }
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    case REMOVE_ERROR_USER:
      return {
        ...state,
        error: null,
        status: IDLE_STATUS,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    default:
      return state
  }
}
