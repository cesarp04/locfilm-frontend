import React from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import HomeMain from "../components/HomeMain"

const Home = () => (
  <>
    <Header showSearch={false} showSignInLogin={true} />
    <HomeMain />
  </>
)
export default Home
