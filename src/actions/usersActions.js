import axios from "axios"
import {
  LOGIN_USER,
  USERS_ERROR,
  REMOVE_ERROR,
  REGISTER_REQUEST,
  ERROR,
} from "../types/userTypes"

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: "http://45.56.74.146:8000/users/login",
      method: "post",
      headers: { "content-type": "application/json" },
      data: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        localStorage.setItem("id", `${data.id}`)
        localStorage.setItem("token", `${data.token}`)
        dispatch(login(data))
      })
      // .then(() => {
      //   window.location.href = redirectUrl
      // })
      .catch((err) => {
        dispatch(setError(err))
      })
  }
}

export const registerUser = ({
  username,
  first_name,
  last_name,
  email,
  password,
  phone,
  address,
}) => {
  console.log(username, first_name, last_name, email, password, phone, address)
  return (dispatch) => {
    axios({
      url: "http://45.56.74.146:8000/users/",
      method: "post",
      headers: { "content-type": "application/json" },
      data: {
        username,
        first_name,
        last_name,
        email,
        password,
        phone,
        address,
        picture: null,
      },
    })
      .then(({ data }) => {
        console.log(data)
        dispatch(registerRequest(data))
      })

      .catch((err) => {
        dispatch(setError(err.response))
      })
  }
}

export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  }
}
export const setError = (err) => {
  return {
    type: USERS_ERROR,
    payload: err,
  }
}

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  }
}
export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  }
}
