import React, { useState } from "react"
// import { connect } from "react-redux"
import { registerUser, setError } from "../actions/usersActions"
import { useDispatch, useSelector } from "react-redux"
import validator from "validator"

// import "../assets/styles/components/Register.scss"
import "../assets/styles/components/Login.scss"

const Register = () => {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.initialState)

  const [form, setValues] = useState({
    username: "",
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
  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setError("Username is required"))
      return false
    } else if (username.trim().length <= 1) {
      dispatch(setError("User must have a minimum of 2 characters"))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"))
      return false
    } else if (password !== password2 || password.length < 8) {
      dispatch(
        setError(
          "Password should be at least 9 characters and match each other"
        )
      )
      return false
    } else if (phone.length === 0) {
      dispatch(setError("Phone is required"))
      return false
    } else if (phone.length < 6) {
      dispatch(setError("the phone must have a minimum of 7 characters"))
      return false
    }
    return true
  }

  const mostrar = (error) => {
    if (typeof error === "string") {
      return error
    } else if (typeof error === "object") {
      const { username, email, password } = error
      if (username) {
        return username
      } else if (email) {
        return email
      } else if (password) {
        return password
      }
    }
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form className="form-register" onSubmit={handleRegister}>
        {error && <div className="auth__alert-error">{mostrar(error)}</div>}
        <input
          type="text"
          name="username"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="username"
          value={username}
          onChange={updateInput}
        />
        <input
          type="text"
          name="first_name"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="first name"
          onChange={updateInput}
        />
        <input
          type="text"
          name="last_name"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="last name"
          onChange={updateInput}
        />
        <input
          type="text"
          name="email"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={updateInput}
        />
        <input
          type="password"
          name="password"
          className="login__container__form--input"
          placeholder="Password"
          value={password}
          onChange={updateInput}
        />
        <input
          type="password"
          name="password2"
          className="login__container__form--input"
          placeholder="Confirm password"
          value={password2}
          onChange={updateInput}
        />
        <input
          type="text"
          name="phone"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="phone"
          value={phone}
          onChange={updateInput}
        />

        <input
          type="text"
          name="address"
          className="login__container__form--input"
          autoComplete="off"
          placeholder="address"
          onChange={updateInput}
        />
        {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
        {/* <input
          type="image"
          placeholder="Name"
          name="picture"
          className="auth__input"
          autoComplete="off"
          onChange={updateInput}
        /> */}
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        {/* <Link to="" className="link">
          Already registered?
        </Link> */}
      </form>
    </>
  )
}

export default Register
