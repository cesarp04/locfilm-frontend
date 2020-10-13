import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { getLocation } from "../actions/locationsActions"
import { makeReservation } from "../actions/locationsActions"
import "../assets/styles/components/CheckoutMain.scss"
import { SUCCESS_STATUS } from "../types/states"

const CheckoutMain = () => {
  const { id } = useParams()

  const history = useHistory()
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.locations)
  const { error, status } = useSelector((state) => state.makeReservation)
  // console.log(error, status)

  useEffect(() => {
    dispatch(getLocation(id))
  }, [])

  const [form, setValues] = useState({
    start_date: "2020-02-08T00:54:22+0000",
    end_date: "",
  })
  const updateInputDate = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleDateinput = (event) => {
    event.preventDefault()
    dispatch(makeReservation(id, form))
  }
  if (status === SUCCESS_STATUS) {
    history.push("/reservations")
  }
  return (
    <main className="container">
      <h2>Checkout</h2>
      <section className="container__imgDate">
        <figure className="container__imgDate--img">
          <img src={data.main_image} alt="The location has no image to show" />
        </figure>
        {data.name ? (
          <h2>{data.name}</h2>
        ) : (
          <h2>location name is not available</h2>
        )}
        {error && (
          <div className="auth__alert-error">{error.data.non_field_errors}</div>
        )}
        <form
          onSubmit={handleDateinput}
          className="container__imgData__data--CheckIn"
        >
          <p>Check in:</p>
          <input
            className="input-date"
            name="start_date"
            autoComplete="off"
            type="date"
            onChange={updateInputDate}
          />
          <p>Check out:</p>
          <input
            className="input-date"
            name="end_date"
            autoComplete="off"
            type="date"
            onChange={updateInputDate}
          />
          <button type="submit">make reservation</button>
        </form>
      </section>

      <section className="container__ticketPayMethood">
        <section className="container__ticketPayMethood__Ticket">
          <div className="container__ticketPayMethood__Ticket__LocationPrice">
            <p>Location Price:</p>
            {data.price ? (
              <p>$ {data.price} USD</p>
            ) : (
              <p>the locations has no available price</p>
            )}
          </div>

          <div className="container__ticketPayMethood__Ticket__Total">
            <p>Total</p>
            {data.price ? <p>$ {data.price} USD</p> : <p>0</p>}
          </div>
        </section>
        <section className="container__ticketPayMethood_PayMethood">
          <h2>Payment Method</h2>
          <div className="container__ticketPayMethood_PayMethood--SPEI">
            <input
              type="checkbox"
              name=""
              className="cbox1"
              id="cbox1"
              value="checkbos"
            />
            <label>SPEI </label>
          </div>
          <div className="container__ticketPayMethood_PayMethood--CeditCard">
            <input
              type="checkbox"
              name=""
              className="cbox1"
              id="cbox1"
              value="checkbos"
            />
            <label>Credit Card </label>
          </div>
          <div className="container__ticketPayMethood_PayMethood--Terms">
            <input
              type="checkbox"
              name=""
              className="cbox1"
              id="cbox1"
              value="checkbos"
            />
            <label>I Have read and accept the terms and conditions </label>
          </div>
          <a href="#" className="container__ticketPayMethood_PayMethood--btn">
            Checkout
          </a>
        </section>
      </section>
    </main>
  )
}

export default CheckoutMain
