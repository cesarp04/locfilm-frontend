import axios from "axios"
import {
  SET_ERROR_LOCATION,
  REQUEST_LOCATIONS,
  REQUEST_RESERVATION,
  SET_ERROR_RESERVATION,
} from "../types/userTypes"

export const getLocation = (id) => {
  return (dispatch) => {
    axios({
      url: `http://45.56.74.146:8000/locations/${id}/`,
      method: "get",
      headers: { "content-type": "application/json" },
    })
      .then(({ data }) => {
        dispatch(requestLocation(data))
      })
      .catch((err) => {
        dispatch(setErrorLocation(err.response))
      })
  }
}
export const makeReservation = (id, { start_date, end_date }) => {
  const token = localStorage.getItem("token")
  console.log(id)
  console.log(start_date, end_date)
  return (dispatch) => {
    axios({
      url: `http://45.56.74.146:8000/locations/${id}/bookings/`,
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: ` Token ${token}`,
      },
      data: {
        start_date: `${start_date}T00:00:00+0000`,
        end_date: `${end_date}T23:00:00+0000`,
        observations: "tv show",
      },
    })
      .then(({ data }) => {
        dispatch(requestReservation(data))
      })
      .catch((err) => {
        dispatch(setErrorReservation(err.response))
      })
  }
}
export const requestLocation = (payload) => {
  return {
    type: REQUEST_LOCATIONS,
    payload,
  }
}

export const setErrorLocation = (err) => {
  return {
    type: SET_ERROR_LOCATION,
    payload: err,
  }
}

export const requestReservation = (payload) => {
  return {
    type: REQUEST_RESERVATION,
    payload,
  }
}
export const setErrorReservation = (payload) => {
  return {
    type: SET_ERROR_RESERVATION,
    payload,
  }
}
