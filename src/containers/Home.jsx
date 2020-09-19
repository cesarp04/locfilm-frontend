import React from "react"
import "../assets/styles/App.scss"
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
// import SearchHeader from '../components/SearchHeader'
import Footer from '../components/Footer'



const Home = () => (
    <div className="App">
        <Header showSearch = {false} />
        <HomeMain/>
        <Footer/>
    </div>
)
export default Home
