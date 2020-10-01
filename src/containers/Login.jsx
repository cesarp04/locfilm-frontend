import React from "react"
import "../assets/styles/components/Login.scss"

import Header from "../components/Header"
import googleIcon from "../assets/static/i_google.png"
import twitterIcon from "../assets/static/i_twitter.png"

const Login = () => (
  <>
    <Header showSearch={false} showSignInLogin={true} />
    <main className="login">
      <section className="login__container">
        <p> Login </p>
        <form className="login__container__from">
          <input
            type="text"
            className="login__container__form--input"
            placeholder="Your email"
          />
          <input
            type="password  "
            className="login__container__form--input"
            placeholder="Your Password"
          />
          <button className="login__container__form--btn">Login</button>
          <div className="login__container__remember-me">
            <label>
              <input
                type="radio"
                name=""
                className="cbox1"
                id="cbox1"
                value="checkbos"
              />{" "}
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
        </form>
        <section className="login__container__SM">
          <div>
            <a href="#">
              <img src={googleIcon} alt="Google" />
              Login with Google
            </a>
          </div>
          <div>
            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
              Login with Twitter
            </a>
          </div>
        </section>
        <div className="login__container__register">
          <p>
            You dont have any account. <a href="#">Register</a>
          </p>
        </div>
      </section>
    </main>

    
  </>
)

export default Login
