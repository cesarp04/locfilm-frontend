import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"

import "../assets/styles/components/MyReservations.scss"

import IMAGEN_DEFAULT from "../assets/static/house_default.jpg"

function MyReservation() {
  return (
    <>
      <Header showSearch={true} showSignInLogin={true} />
      <section className="reservation">
        <h1 className="title-reservation">My Reservations</h1>
        <div className="title-reservation--links">
          <Link className="upcoming">Upcoming</Link>
          <Link className="past">Past</Link>
          <Link className="canceled">Canceled</Link>
        </div>
        
        <div className="container">
          <div className="card">
            <figure className="container__card__details__img">
                <img src={IMAGEN_DEFAULT} alt="" />
            </figure>
            <div className="container__card__details">
              <div className="container__card__details--bts">
                <button>Cancel</button>
                <button>Rate</button>
              </div>
              <div className="container__card__details--dates">
                <p>Start </p>
                <p>End </p>
              </div>
              <div className="container__card__details--status">
                <p>Status</p>
              </div>
            </div> 
          </div>

          <div className="card">
            <figure className="container__card__details__img">
                <img src={IMAGEN_DEFAULT} alt="" />
            </figure>
            <div className="container__card__details">
              <div className="container__card__details--bts">
                <button>Cancel</button>
                <button>Rate</button>
              </div>
              <div className="container__card__details--dates">
                <p>Start </p>
                <p>End </p>
              </div>
              <div className="container__card__details--status">
                <p>Status</p>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}

export default MyReservation
