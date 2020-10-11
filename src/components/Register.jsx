import React, { useState } from "react"
import {
  registerUser,
  setErrorRegister,
  removeErrorRegister,
} from "../actions/registerActions"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import validator from "validator"
import "../assets/styles/components/Register.scss"
import Header from "../components/Header"
import { SUCCESS_STATUS } from "../types/states"

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { error, status } = useSelector((state) => state.userRegister)

  const [form, setValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    email: "",
    phone: "",
  })

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const { username, password, password2, email, phone } = form

  const handleRegister = (event) => {
    event.preventDefault()

    if (isFormValid()) {
      dispatch(registerUser(form))
    }
  }
  if (status === SUCCESS_STATUS) {
    history.push("/login")
  }
  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setErrorRegister("Username is required"))
      return false
    } else if (username.trim().length <= 1) {
      dispatch(setErrorRegister("User must have a minimum of 2 characters"))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorRegister("Email is not valid"))
      return false
    } else if (password !== password2 || password.length < 8) {
      dispatch(
        setErrorRegister(
          "Password should be at least 9 characters and match each other"
        )
      )
      return false
    } else if (phone.length === 0) {
      dispatch(setErrorRegister("Phone is required"))
      return false
    } else if (phone.length < 6) {
      dispatch(
        setErrorRegister("the phone must have a minimum of 7 characters")
      )
      return false
    }
    dispatch(removeErrorRegister())
    return true
  }

  const mostrar = (error) => {
    if (typeof error === "string") {
      return error
    } else if (typeof error === "object") {
      const { username, email, password } = error.data
      if (username) {
        return username
      } else if (email) {
        return email
      } else if (password) {
        return password
      }
    }
    dispatch(removeErrorRegister())
  }

  return (
    <>
      <Header showSearch={false} showSignInLogin={true} />
      <div className="container__Chiff">
        <div className="container__auth__title">
          <div className="container__auth__title--auth__title">
            <h3 className="auth__title">Register</h3>
          </div>

          <form className="form-register" onSubmit={handleRegister}>
            {error && <div className="auth__alert-error">{mostrar(error)}</div>}
            <input
              type="text"
              name="username"
              className="input_register1"
              autoComplete="off"
              placeholder="username"
              value={username}
              onChange={updateInput}
            />
            <div className="block2">
              <input
                type="text"
                name="first_name"
                className="input_register"
                autoComplete="off"
                placeholder="first name"
                onChange={updateInput}
              />
              <input
                type="text"
                name="last_name"
                className="input_register"
                autoComplete="off"
                placeholder="last name"
                onChange={updateInput}
              />
            </div>
            <input
              type="text"
              name="email"
              className="input_register"
              autoComplete="off"
              placeholder="Email"
              value={email}
              onChange={updateInput}
            />
            <input
              type="password"
              name="password"
              className="input_register"
              placeholder="Password"
              value={password}
              onChange={updateInput}
            />
            <input
              type="password"
              name="password2"
              className="input_register"
              placeholder="Confirm password"
              value={password2}
              onChange={updateInput}
            />
            <input
              type="text"
              name="phone"
              className="input_register"
              autoComplete="off"
              placeholder="phone"
              value={phone}
              onChange={updateInput}
            />
            <input
              type="text"
              name="address"
              className="input_register"
              autoComplete="off"
              placeholder="address"
              onChange={updateInput}
            />
            <label htmlFor="">upload your profile picture</label>
            <input
              type="file"
              placeholder="imagen perfil"
              name="picture"
              className="auth__input"
              autoComplete="off"
              onChange={updateInput}
            />
            <button type="submit" className="btn-register">
              Register
            </button>
            {/* <Link to="" className="link">
              Already registered?
            </Link> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
