import React from 'react'
import '../assets/styles/components/SearchResults.scss'
import img1 from '../assets/static/1.jpg'
import img2 from '../assets/static/2.jpg'
import img3 from '../assets/static/3.jpg'
import img4 from '../assets/static/4.jpg'
import img5 from '../assets/static/5.jpg'
import Header from "../components/Header"


const SearchResults = () => (
    
    <Header showSearch={false} showSignInLogin={true} />
    <main className="SearchResults">
        <section className="main-Search-Results__head">
            <div className="main-Search-Results__head-title">
                <h3> Search Results   </h3>
            </div>
        </section>
        <section className="carousel">
            <div className="corousel__container">
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img1} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img2} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img3} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img4} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img5} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img3} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img2} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carousel-item__img" src={img1} alt="people"/>
                    <div className="carousel-item__details">
                        <p className="carousel-item__details--title">Name of locaction</p>
                        <p className="carousel-item__details--price">$ 1,000 USD</p>
                        <p className="carousel-item__details--location">CDMX, México</p>
                        <div className="carousel-item__details--btn">
                            <a href="#">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
); 

export default SearchResults