import { IDLE_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../types/states"
import { REQUEST_USER, REQUEST_USER_ERROR } from "../types/userTypes"

const initialState = {
  status: IDLE_STATUS,
  data: {},
  error: null,
}

export const requestUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        status: SUCCESS_STATUS,
        data: action.payload,
      }
    case REQUEST_USER_ERROR:
      return {
        ...state,
        status: FAILURE_STATUS,
        error: action.payload,
      }
    default:
      return state
  }
}
