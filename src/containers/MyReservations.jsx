import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "../assets/styles/components/MyReservations.scss"
import { getMyReservations } from '../actions/reservationActions'

import IMAGEN_DEFAULT from "../assets/static/house_default.jpg"

function MyReservation() {

  const [reservations, setReservations] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [hasData, setHasData] = useState(false);

  const getUpcoming = () => {
    return reservations.filter(r => r.status === 'Confirmed' || r.status === 'Pending');
  }

  const getPast = () => {
    return reservations.filter(r => r.status === 'Finished');
  }

  const getcanceled = () => {
    return reservations.filter(r => r.status === 'Cancelled');
  }

  const showReservation = (type) => {

    switch (type) {
      case "Upcoming":
        setReservationList(getUpcoming());
        break;
      case "Past":
        setReservationList(getPast());
        break;
      case "Cancelled":
        setReservationList(getcanceled());
        break;
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
      description: 'great location'
    }
    console.log("Calificar: ", id)
  }

  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    getMyReservations()
      .then((response) => {
        setReservations(response.data);
        setReservationList(response.data.filter(r => r.status === 'Confirmed' || r.status === 'Pending'));
        setHasData(response.data.length > 0);
        setLoaded(true);
      })
      .catch((response) => {
        setHasData(false);
        setLoaded(true);
      })
  }, [setHasData, setLoaded, setReservations, setReservationList]);

  return (
    <>
      <Header showSearch={true} showSignInLogin={true} />
      <section className="reservation">
        <h1 className="title-reservation">My Reservations</h1>
        <div>
          <a className="upcoming" onClick={() => showReservation('Upcoming')}>Upcoming</a>
          <a className="past" onClick={() => showReservation('Past')}>Past</a>
          <a className="canceled" onClick={() => showReservation('Cancelled')}>Canceled</a>
        </div>
        <div className="container">

          {!loaded?<h1>Loding data</h1>
            : hasData ? reservationList.map((reservation, index) =>
              (<div key={index} className="card">
                <figure >
                  <img src={IMAGEN_DEFAULT} alt="" />
                </figure>
                <h3>Start Date: {reservation.start_date.substring(0, 10)}</h3>
                <h3>End Date: {reservation.end_date.substring(0, 10)}</h3>
                <h3>Status: {reservation.status}</h3>
                {(reservation.status === 'Pending') ?
                  <button onClick={() => cancelReservation(reservation.id)}>Cancel</button>
                  : null}
                {(reservation.status === 'Finished') ?
                  <button onClick={() => ratingReservation(reservation.id)}>Rating</button>
                  : null}
              </div>)) : <h1>No data</h1> 
          }

        </div>
      </section>
    </>
  )
}

export default MyReservation
