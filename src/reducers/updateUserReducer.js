import { IDLE_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../types/states"
import {
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_SET_STATUS,
} from "../types/userTypes"

const initialStateUpdateUSer = {
  status: IDLE_STATUS,
  data: {},
  error: null,
}

export const updateUserReducer = (state = initialStateUpdateUSer, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        status: SUCCESS_STATUS,
        data: action.payload,
      }
    case UPDATE_USER_ERROR:
      return {
        ...state,
        status: FAILURE_STATUS,
        error: action.payload,
      }
    case UPDATE_SET_STATUS:
      return {
        ...state,
        status: IDLE_STATUS,
      }
    default:
      return state
  }
}
