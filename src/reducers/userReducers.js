import {
  LOGIN_USER,
  USERS_ERROR,
  REGISTER_REQUEST,
  ERROR,
} from "../types/userTypes"
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from "../types/states"

const initialState = {
  status: IDLE_STATUS,
  user: {},
  data: {},
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        data: {},
        status: SUCCESS_STATUS,
      }
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        data: action.payload,
        status: SUCCESS_STATUS,
      }
    default:
      return state
  }
}
