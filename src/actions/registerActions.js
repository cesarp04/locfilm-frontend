import axios from "axios"
import {
  REMOVE_ERROR_REGISTER,
  ERROR_REGISTER,
  REGISTER_REQUEST,
} from "../types/userTypes"

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
        dispatch(setErrorRegister(err.response))
      })
  }
}

export const removeErrorRegister = () => {
  return {
    type: REMOVE_ERROR_REGISTER,
  }
}
export const setErrorRegister = (err) => {
  return {
    type: ERROR_REGISTER,
    payload: err,
  }
}
export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  }
}
