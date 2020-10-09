import React from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import DetailsMain from "../components/DetailsMain"

const Details = () => (
  <>
    <Header showSearch={false} showSignInLogin={true} />
    <DetailsMain />
  </>
)
export default Details
