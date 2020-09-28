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
        <div>
          <Link className="upcoming">Upcoming</Link>
          <Link className="past">Past</Link>
          <Link className="canceled">Canceled</Link>
        </div>
        <div className="container">
          <div className="card">
            <figure>
              <img src={IMAGEN_DEFAULT} alt="" />
            </figure>
            <div class="rate-area">
              <input type="radio" id="5-star" name="rating" value="5" />
              <label for="5-star" title="Amazing">
                ★
              </label>
              <input type="radio" id="4-star" name="rating" value="4" />
              <label for="4-star" title="Good">
                ★
              </label>
              <input type="radio" id="3-star" name="rating" value="3" />
              <label for="3-star" title="Average">
                ★
              </label>
              <input type="radio" id="2-star" name="rating" value="2" />
              <label for="2-star" title="Not Good">
                ★
              </label>

              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" title="Bad">
                ★
              </label>
            </div>
          </div>
          <div className="card">
            <figure>
              <img src={IMAGEN_DEFAULT} alt="" />
            </figure>
            <ul class="rate-area">
              <input type="radio" id="5-star" name="rating" value="5" />
              <label for="5-star" title="Amazing">
                ★
              </label>
              <input type="radio" id="4-star" name="rating" value="4" />
              <label for="4-star" title="Good">
                ★
              </label>
              <input type="radio" id="3-star" name="rating" value="3" />
              <label for="3-star" title="Average">
                ★
              </label>
              <input type="radio" id="2-star" name="rating" value="2" />
              <label for="2-star" title="Not Good">
                ★
              </label>

              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" title="Bad">
                ★
              </label>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyReservation
