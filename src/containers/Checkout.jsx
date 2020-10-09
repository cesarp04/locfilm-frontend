import React from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import CheckoutMain from "../components/CheckoutMain"

const Checkout = () => (
  <>
    <Header showSearch={false} showSignInLogin={true} />
    <CheckoutMain />
  </>
)
export default Checkout
