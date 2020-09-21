import React from "react"
import "../assets/styles/App.scss"
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'



const Home = () => (
    <div className="App">
        <Header showSearch = {true} showSignInLogin = {true} />
        <HomeMain/>
        <Footer/>
    </div>
)
export default Home
