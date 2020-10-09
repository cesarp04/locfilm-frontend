import React, { useState } from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/usersActions"
import { useHistory } from "react-router-dom"

import Header from "../components/Header"
import "../assets/styles/components/Login.scss"

const Login = (props) => {
  let history = useHistory()
  const [form, setValues] = useState({
    email: "",
    id: "",
  })

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleLogin = (event) => {
    event.preventDefault()
    props.loginUser(form)
    history.push("/")
  }

  return (
    <>
      <Header showSearch={false} showSignInLogin={true} />
      <main className="login">
        <section className="login__container">
          <p className="login__container-p"> Login </p>
          <form className="login__container__from" onSubmit={handleLogin}>
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
              You dont have any account. <a href="#">Register</a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
// const mapStateToProps = (state) => ({ data: state.data })

const mapDispatchToProps = {
  loginUser,
}

export default connect(null, mapDispatchToProps)(Login)
