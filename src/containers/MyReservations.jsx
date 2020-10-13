import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import "../assets/styles/components/MyReservations.scss"
import { getMyReservations, cancelReservation, ratingReservation } from '../actions/reservationActions'

import IMAGEN_DEFAULT from "../assets/static/house_default.jpg"

function MyReservation() {

  const [rating, setRating] = useState({
    accesibility: 1,
    conditions: 1,
    average: 1,
    description: ''
  });

  const [reservations, setReservations] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [showRatingModal, setshowRatingModal] = useState(false);
  const [showCancelModal, setshowCancelModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [message, setMessage] = useState(false);
  const [currentReservation, setCurrentReservation] = useState(null);

  const initializeRating = () => {
    setRating({
      accesibility: 1,
      conditions: 1,
      average: 1,
      description: ''
    });
  }

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

  const showCancelModalHandler = (id) => {
    setCurrentReservation(id);
    setshowRatingModal(false);
    setshowCancelModal(true);
    setMessage("");
    setShowMessageModal(false);
  }

  const showRatingModalHandler = (id) => {
    initializeRating();
    setCurrentReservation(id);
    setshowRatingModal(true);
    setshowCancelModal(false);
    setMessage("");
    setShowMessageModal(false);
  }

  const closeModalHandler = (id) => {
    initializeRating();
    setCurrentReservation(null);
    setshowRatingModal(false);
    setshowCancelModal(false);
    setMessage("");
    setShowMessageModal(false);
  }

  const cancelReservationHandler = () => {
    console.log("Cancelar: ", currentReservation)

    setshowRatingModal(false);
    setshowCancelModal(false);

    cancelReservation(currentReservation)
      .then((response) => {
        console.log(response);
        setMessage("The reservation has been cancelled");
        setShowMessageModal(true);
        loadReservations();
      })
      .catch((response) => {
        setMessage("Upps, It was not possible to cancel the reservation");
        setShowMessageModal(true);
      });
  }

  const ratingReservationHandler = () => {

    console.log("Calificar: ", currentReservation)

    ratingReservation(currentReservation, rating)
      .then((response) => {
        console.log("exito: ", response);
        setshowRatingModal(false);
        setshowCancelModal(false);
        setMessage("Your rating has been sent, ¡Thank you!");
        setShowMessageModal(true);
      })
      .catch((response) => {
        console.log("error: ", response);
        setshowRatingModal(false);
        setshowCancelModal(false);
        setMessage("Upps, It was not possible to rating the reservation");
        setShowMessageModal(true);
      });
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

  const loadReservations = () => {

    setReservations([]);
    setReservationList([]);
    setHasData(false);
    setLoaded(false);

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
      });
  }

  const setRatingHandler = (ratingInt, type) => {

    setRating((rating) => {
      return { ...rating, [type]: ratingInt };
    });

    console.log(rating);
  }

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

          {!loaded ? <h1>Loding data</h1>
            : hasData ? reservationList.map((reservation, index) =>
              (<div key={index} className="card">
                <figure className="card__container--imgs" >
                  <img className="card__container--imgs--img" src={reservation.location_id.main_image} alt=" " />
                </figure>
                <div className="card__info">
                  <h3>{reservation.location_id.name}</h3>
                  <p> {reservation.location_id.city}</p>
                  <p>Status: {reservation.status}</p>
                  {(reservation.status === 'Pending') ?
                    <button className="card--btns" onClick={() => showCancelModalHandler(reservation.id)}>Cancel</button>
                    : null}
                  {(reservation.status === 'Finished') ?
                    <button className="card--btns" onClick={() => showRatingModalHandler(reservation.id)}>Rating</button>
                    : null}
                </div>

              </div>)) : <h1>No data</h1>
          }

        </div>
      </section>
      {showRatingModal ?

        <section className="modal-star">
          <div className="modal-star__container">
            <div className="modal-star__container__accessibility">
              <p className="modal-star__container--titles" >Accessibility</p>
              <div className="modal-star__container__accessibility--range" >
                <label htmlFor="radio1" className={rating.accesibility >= 5 ? 'star-selected' : null} onClick={() => setRatingHandler(5, 'accesibility')}>★</label>
                <label htmlFor="radio2" className={rating.accesibility >= 4 ? 'star-selected' : null} onClick={() => setRatingHandler(4, 'accesibility')}>★</label>
                <label htmlFor="radio3" className={rating.accesibility >= 3 ? 'star-selected' : null} onClick={() => setRatingHandler(3, 'accesibility')}>★</label>
                <label htmlFor="radio4" className={rating.accesibility >= 2 ? 'star-selected' : null} onClick={() => setRatingHandler(2, 'accesibility')}>★</label>
                <label htmlFor="radio5" className={rating.accesibility >= 1 ? 'star-selected' : null} onClick={() => setRatingHandler(1, 'accesibility')}>★</label>
              </div>
            </div>
            <div className="modal-star__container__Quality">
              <p className="modal-star__container--titles">Quality</p>
              <div className="modal-star__container__accessibility--range">
                <input type="radio" name="estrellas2" value="5" />
                <label htmlFor="radio1" className={rating.conditions >= 5 ? 'star-selected' : null} onClick={() => setRatingHandler(5, 'conditions')}>★</label>

                <input type="radio" name="estrellas2" value="4" />
                <label htmlFor="radio2" className={rating.conditions >= 4 ? 'star-selected' : null} onClick={() => setRatingHandler(4, 'conditions')}>★</label>

                <input type="radio" name="estrellas2" value="3" />
                <label htmlFor="radio3" className={rating.conditions >= 3 ? 'star-selected' : null} onClick={() => setRatingHandler(3, 'conditions')}>★</label>

                <input type="radio" name="estrellas2" value="2" />
                <label htmlFor="radio4" className={rating.conditions >= 4 ? 'star-selected' : null} onClick={() => setRatingHandler(2, 'conditions')}>★</label>

                <input type="radio" name="estrellas2" value="1" />
                <label htmlFor="radio5" className={rating.conditions >= 1 ? 'star-selected' : null} onClick={() => setRatingHandler(1, 'conditions')}>★</label>
              </div>
            </div>

            <div className="modal-star__container__Quality">
              <p className="modal-star__container--titles">Price</p>
              <div className="modal-star__container__accessibility--range">
                <label htmlFor="radio1" className={rating.average >= 5 ? 'star-selected' : null} onClick={() => setRatingHandler(5, 'average')}>★</label>
                <label htmlFor="radio2" className={rating.average >= 4 ? 'star-selected' : null} onClick={() => setRatingHandler(4, 'average')}>★</label>
                <label htmlFor="radio3" className={rating.average >= 3 ? 'star-selected' : null} onClick={() => setRatingHandler(3, 'average')}>★</label>
                <label htmlFor="radio4" className={rating.average >= 2 ? 'star-selected' : null} onClick={() => setRatingHandler(2, 'average')}>★</label>
                <label htmlFor="radio5" className={rating.average >= 1 ? 'star-selected' : null} onClick={() => setRatingHandler(1, 'average')} >★</label>
              </div>

              <button className="modal-star__container__accessibility--btn" onClick={ratingReservationHandler}> Send</button>
              <button className="modal-star__container__accessibility--btn" onClick={closeModalHandler}> Cancel</button>
            </div>
          </div>
        </section>
        : null}
      {showCancelModal ?
        <section className="modal-cancel">
          <div className="modal-cancel--container">
            <h2>Dude! Wait!</h2>
            <p>Are you sure you want to cancel your reservation?</p>
            <div className="modal-cancel--container-btns">
              <button onClick={closeModalHandler}>No!</button>
              <button onClick={cancelReservationHandler}>Yes!</button>
            </div>
          </div>

        </section>
        : null}

      {showMessageModal ?
        <section className="modal-cancel">
          <div className="modal-cancel--container">
            <h2>{message}</h2>
            <div className="modal-cancel--container-btns">
              <button onClick={closeModalHandler}>Ok!</button>
            </div>
          </div>

        </section>
        : null}
    </>
  )
}

export default MyReservation
