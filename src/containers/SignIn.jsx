import React from 'react'
import '../assets/styles/components/SignIn.scss'

const SignIn = () => (
    <main className="register">
        <section className="register__container">
           <p> Register </p>
            <form className="register__container__from">
                <input type="text" className="register__container__form--input" placeholder="Your email"/>
                <input type="password  " className="register__container__form--input" placeholder="Your Password"/>
                <button className="register__container__form--btn">Register</button>
                <div className="register__container__remember-me">
                    <label>
                        <input type="radio" name="" className="cbox1" id="cbox1" value="checkbos"/>Remember me
                    </label>
                    <a href="#">Forgot Password</a>
                </div>
            </form>
            <div className="register__container__register">
                <p>You don&apos;t have any account. <a href="#">Register</a></p>
            </div>
        </section>
    </main>
); 

export default SignIn