import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "../assets/styles/components/MyReservations.scss"
import { getMyReservations } from "../actions/reservationActions"

function MyReservation() {
  const [reservations, setReservations] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [hasData, setHasData] = useState(false)

  const getUpcoming = () => {
    return reservations.filter(
      (r) => r.status === "Confirmed" || r.status === "Pending"
    )
  }

  const getPast = () => {
    return reservations.filter((r) => r.status === "Finished")
  }

  const getcanceled = () => {
    return reservations.filter((r) => r.status === "Cancelled")
  }

  const showReservation = (type) => {
    switch (type) {
      case "Upcoming":
        setReservationList(getUpcoming())
        break
      case "Past":
        setReservationList(getPast())
        break
      case "Cancelled":
        setReservationList(getcanceled())
        break
    }
  }

  const cancelReservation = (id) => {
    console.log("Cancelar: ", id)
  }

  const ratingReservation = (id) => {
    let rating = {
      accesibility: 5,
      conditions: 5,
      average: 5,
      description: "great location",
    }
    console.log("Calificar: ", id)
  }

  const [reservationList, setReservationList] = useState([])

  useEffect(() => {
    getMyReservations()
      .then((response) => {
        setReservations(response.data)
        setReservationList(
          response.data.filter(
            (r) => r.status === "Confirmed" || r.status === "Pending"
          )
        )
        setHasData(response.data.length > 0)
        setLoaded(true)
      })
      .catch((response) => {
        setHasData(false)
        setLoaded(true)
      })
  }, [setHasData, setLoaded, setReservations, setReservationList])

  return (
    <>
      <Header showSearch={true} showSignInLogin={true} />
      <section className="reservation">
        <h1 className="title-reservation">My Reservations</h1>

        <div>
          <a className="upcoming" onClick={() => showReservation("Upcoming")}>
            Upcoming
          </a>
          <a className="past" onClick={() => showReservation("Past")}>
            Past
          </a>
          <a className="canceled" onClick={() => showReservation("Cancelled")}>
            Canceled
          </a>
        </div>

        <div className="container">
          {!loaded ? (
            <h1>Loding data</h1>
          ) : hasData ? (
            reservationList.map((reservation, index) => (
              <div key={index} className="card">
                <figure>
                  <img src={reservation.location_id.main_image} alt=" " />
                </figure>
                <div className="card__info">
                  <h3>{reservation.location_id.name}</h3>
                  <p> {reservation.location_id.city}</p>
                  <p>Status: {reservation.status}</p>
                  {reservation.status === "Pending" ? (
                    <button
                      className="card--btns"
                      onClick={() => cancelReservation(reservation.id)}
                    >
                      Cancel
                    </button>
                  ) : null}
                  {reservation.status === "Finished" ? (
                    <button
                      className="card--btns"
                      onClick={() => ratingReservation(reservation.id)}
                    >
                      Rating
                    </button>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <h1>No data</h1>
          )}
        </div>
      </section>
      <section className="modal-star">
        <div className="modal-star__container">
          <div className="modal-star__container__accessibility">
            <p className="modal-star__container--titles">Accessibility</p>
            <div className="modal-star__container__accessibility--range">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>

              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>

              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>

              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>

              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </div>
          </div>

          <div className="modal-star__container__Quality">
            <p className="modal-star__container--titles">Quality</p>
            <div className="modal-star__container__accessibility--range">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>

              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>

              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>

              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>

              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </div>
          </div>

          <div className="modal-star__container__Quality">
            <p className="modal-star__container--titles">Price</p>
            <div className="modal-star__container__accessibility--range">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label for="radio1">★</label>

              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label for="radio2">★</label>

              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label for="radio3">★</label>

              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label for="radio4">★</label>

              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label for="radio5">★</label>
            </div>
            <button className="modal-star__container__accessibility--btn">
              {" "}
              Send
            </button>
          </div>
        </div>
      </section>
      <section className="modal-cancel">
        <div className="modal-cancel--container">
          <h2>Dude! Wait!</h2>
          <p>Are you sure you want to cancel your reservation?</p>
          <div className="modal-cancel--container-btns">
            <button>No!</button>
            <button>Yes!</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyReservation
