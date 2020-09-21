import React from "react"
import "../assets/styles/App.scss"
import Header from "../components/Header"
import HomeMain from "../components/HomeMain"
// import SearchHeader from '../components/SearchHeader'

const Home = () => (
  <>
    <Header showSearch={false} />
    <HomeMain />
  </>
)
export default Home
