import React, { useEffect, useState } from "react"
import "../assets/styles/components/SearchResults.scss"

import Header from "../components/Header"
import { searchLocations } from "../actions/locationActions"
import queryString from "query-string"
import { Link } from "react-router-dom"

const SearchResults = (props) => {
  const values = queryString.parse(props.location.search)
  const [results, setResults] = useState(null)
  const [loaded, setLoaded] = useState(false);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    searchLocations(values.search, null).then((response) => {
      setHasData(response.data.results.length>0);
      setLoaded(true);
      setResults(response.data.results)
    })
  }, [setResults])

  return (
    <>
      <Header showSearch={false} showSignInLogin={true} />
      <main className="SearchResults">
        <section className="main-Search-Results__head">
          <div className="main-Search-Results__head-title">
            <h3> Search Results </h3>
          </div>
        </section>

        <section className="carousel">
          <div className="corousel__container">
            {loaded?
              hasData? results.map((location, index) => {
                  return (
                    <div key={index} className="carousel-item">
                      <img
                        className="carousel-item__img"
                        src={location.main_image}
                        alt="no images available"
                      />
                      <div className="carousel-item__details">
                        <p className="carousel-item__details--title">
                          {location.name}
                        </p>
                        <p className="carousel-item__details--price">
                          {location.price}
                        </p>
                        <p className="carousel-item__details--location">
                          {location.city}
                        </p>
                        <div className="carousel-item__details--btn">
                          <Link to={"locations/" + location.id}>Book Now</Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              : (<h1>Not results found for {values.search}</h1>)
            :(<h1>Loading data</h1>) }
          </div>
        </section>
      </main>
    </>
  )
}

export default SearchResults
