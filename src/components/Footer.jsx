import React from "react"
import "../assets/styles/components/Footer.scss"
import logo from "../assets/static/logoh.png"


const Footer = () => (
  <footer>
    <section className="footerMain">
      <div className="footerMain__links">
        <figure className="footerMain__links--logo">
           <img src={logo} alt="Logo" />{" "}
        </figure>
      </div>
      <div className="footerMain_conatinerNewslatter">
        <div className="footerMain__Newsletter">
          <p>Newsletter</p>
          <p>Sign up for the newsletter</p>
        </div>
        <div className="footerMain__BtnNewsletter">
          <input
            className="footerMain__BtnNewsletter--input"
            type="text"
            placeholder="Your Email"
          />
          <a href="#">Subscribe</a>
        </div>
      </div>
    </section>
    <section className="footerCredits">
      <p>
        2020. <span> PLATZI MASTER</span>
      </p>
    </section>
  </footer>
)

export default Footer
