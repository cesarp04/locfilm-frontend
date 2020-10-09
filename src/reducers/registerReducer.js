import {
  REGISTER_REQUEST,
  REMOVE_ERROR_REGISTER,
  ERROR_REGISTER,
} from "../types/userTypes"
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from "../types/states"

const reg = {
  status: IDLE_STATUS,
  data: {},
  error: null,
}

export const registerReducer = (state = reg, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        data: action.payload,
        status: SUCCESS_STATUS,
      }
    case REMOVE_ERROR_REGISTER:
      return {
        ...state,
        status: IDLE_STATUS,
        error: null,
      }
    case ERROR_REGISTER:
      return {
        ...state,
        status: FAILURE_STATUS,
        error: action.payload,
      }
    default:
      return state
  }
}
