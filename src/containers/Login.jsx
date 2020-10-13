import React, { useState } from "react"
import { loginUser, setError } from "../actions/usersActions"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import validator from "validator"
import { Link } from "react-router-dom"


import Header from "../components/Header"
import "../assets/styles/components/Login.scss"
import { SUCCESS_STATUS } from "../types/states"

const Login = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const { error, status } = useSelector((state) => state.auth)
  const [form, setValues] = useState({
    email: "",
    id: "",
  })

  const { email } = form

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleLogin = (event) => {
    event.preventDefault()
    if (isFormValid()) {
      dispatch(loginUser(form))
    }
  }

  if (status === SUCCESS_STATUS) {
    history.push("/")
  }
  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"))
      return false
    }
    return true
  }
  const mostrar = (error) => {
    if (typeof error === "string") {
      return error
    } else if (typeof error === "object") {
      const { username, non_field_errors, password } = error.data
      if (username) {
        return username
      } else if (password) {
        return password
      } else if (non_field_errors) {
        const res = "wrong email or password"
        return res
      }
    } else if (error === null) {
      return true
    }
  }

  return (
    <>
      <Header showSearch={false} showSignInLogin={true} />
      <main className="login">
        <section className="login__container">
          <p className="login__container-p"> Login </p>
          <form className="login__container__from" onSubmit={handleLogin}>
            {error && <div className="auth__alert-error">{mostrar(error)}</div>}
            <input
              type="text"
              className="login__container__form--input"
              name="email"
              placeholder="Your email"
              autoComplete="off"
              onChange={updateInput}
            />
            <input
              type="password"
              className="login__container__form--input"
              name="password"
              placeholder="Your password"
              onChange={updateInput}
            />
            <button type="submit" className="login__container__form--btn">
              Login
            </button>
            <div className="login__container__remember-me">
              <a href="#">Forgot Password</a>
            </div>
          </form>
          <div className="login__container__register">
            <p className="login__container__register-p">
              You dont have any account. <Link to="register">Register</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}


export default Login
