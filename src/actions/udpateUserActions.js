import axios from "axios"
import {
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_SET_STATUS,
} from "../types/userTypes"

export const pacthUser = ({
  username,
  first_name,
  last_name,
  address,
  picture,
}) => {
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  return (dispatch) => {
    axios({
      url: `http://45.56.74.146:8000/users/${id}/`,
      method: "patch",
      headers: {
        "content-type": "application/json",
        Authorization: ` Token ${token}`,
      },
      data: {
        username,
        first_name,
        last_name,
        address,
        picture,
      },
    })
      .then(({ data }) => {
        dispatch(updateUser(data))
      })
      .catch((err) => {
        dispatch(updateUserError(err.response))
      })
  }
}
export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  }
}
export const updateUserError = (err) => {
  return {
    type: UPDATE_USER_ERROR,
    payload: err,
  }
}
export const setStatus = () => {
  return {
    type: UPDATE_SET_STATUS,
  }
}
