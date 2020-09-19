import React from "react"
import "../assets/styles/App.scss"
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
// import SearchHeader from '../components/SearchHeader'
import Footer from '../components/Footer'



const Home2 = () => (
    <div className="App">
        <Header showSearch = {true} />
        <HomeMain/>
        <Footer/>
    </div>
)
export default Home2
