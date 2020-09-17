import React from "react"
import "../assets/styles/App.scss"
import Header from '../components/Header'
import SearchHeader from '../components/SearchHeader'
import Footer from '../components/Footer'



const App = () => (
    <div className="App">
        <Header/>
        <SearchHeader/>
       
        <h1>Contenido </h1>
        <Footer/>
    </div>
)
export default App
