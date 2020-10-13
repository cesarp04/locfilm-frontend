import { IDLE_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../types/states"
import { REQUEST_RESERVATION, SET_ERROR_RESERVATION } from "../types/userTypes"

const initialStateReservation = {
  status: IDLE_STATUS,
  data: {},
  error: null,
}

export const reservationReducer = (state = initialStateReservation, action) => {
  switch (action.type) {
    case REQUEST_RESERVATION:
      return {
        ...state,
        status: SUCCESS_STATUS,
        data: action.payload,
      }
    case SET_ERROR_RESERVATION:
      return {
        ...state,
        status: FAILURE_STATUS,
        error: action.payload,
      }
    default:
      return state
  }
}
