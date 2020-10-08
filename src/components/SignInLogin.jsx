import React from "react"
import "../assets/styles/components/SignInLogin.scss"
import { Link } from "react-router-dom"

const SignInLogin = () => (
  <div className="Header__SignLogin">
    <div className="Header__SignLogin-Sign">
      <Link to="/register">Sign in</Link>
    </div>
    <div className="Header__SignLogin-Login">
      <Link to="/login">Login</Link>
    </div>
  </div>
)

export default SignInLogin
