import React from "react"
import "../assets/styles/App.scss"
<<<<<<< HEAD
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'



const Home = () => (
    <div className="App">
        <Header showSearch = {true} showSignInLogin = {true} />
        <HomeMain/>
        <Footer/>
    </div>
=======
import Header from "../components/Header"
import HomeMain from "../components/HomeMain"
// import SearchHeader from '../components/SearchHeader'

const Home = () => (
  <>
    <Header showSearch={false} />
    <HomeMain />
  </>
>>>>>>> 6acbadffe040365cb942f91467e78f0876041e93
)
export default Home
