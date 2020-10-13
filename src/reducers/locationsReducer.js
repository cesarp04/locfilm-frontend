import { IDLE_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../types/states"
import { REQUEST_LOCATIONS, SET_ERROR_LOCATION } from "../types/userTypes"

const initialStateLocations = {
  status: IDLE_STATUS,
  data: {},
  error: null,
}

export const locationsReducer = (state = initialStateLocations, action) => {
  switch (action.type) {
    case REQUEST_LOCATIONS:
      return {
        ...state,
        status: SUCCESS_STATUS,
        data: action.payload,
      }
    case SET_ERROR_LOCATION:
      return {
        ...state,
        status: FAILURE_STATUS,
        error: action.payload,
      }
    default:
      return state
  }
}
