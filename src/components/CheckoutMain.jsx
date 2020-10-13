import React, { useState } from "react"
import "../assets/styles/components/CheckoutMain.scss"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const CheckoutMain = () => {
  const [startDate, setStartDate] = useState(new Date())
  function testStart(fecha) {
    console.log(fecha)
    setStartDate(fecha)
  }

  const [endDate, setendDate] = useState(new Date())
  function testEnd(fecha) {
    console.log(fecha)
    setendDate(fecha)
  }

  //
  const [showFilterModal, setShowFilterModal] = useState(false)
  function changeModalVisibility() {
    setShowFilterModal(!showFilterModal)
    console.log(showFilterModal)
  }

  return (
    <main className="container">
      <h2>Checkout</h2>
      <section className="container__imgDate">
        <figure className="container__imgDate--img">
          <img src="" alt="no images available" />
        </figure>
        <div className="container__imgData__data">
          <h2>Cencalli</h2>
          <div className="container__imgData__data--CheckIn">
            <p>Check in:</p>
            <DatePicker
              className="Container__datesAndSlider__dates--choose--datePickerCheckout"
              selected={startDate}
              onChange={(date) => testStart(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="container__imgData__data--CheckOut">
            <p>Check out:</p>
            <DatePicker
              className="Container__datesAndSlider__dates--choose--datePickerCheckout"
              selected={endDate}
              onChange={(date) => testEnd(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />{" "}
          </div>
          <div className="container__imgData__data--ChangeDates">
            <a href="#">Change Date</a>
          </div>
        </div>
      </section>

      <section className="container__ticketPayMethood">
        <section className="container__ticketPayMethood__Ticket">
          <div className="container__ticketPayMethood__Ticket__LocationPrice">
            <p>Location Price:</p>
            <p>$3,000.00</p>
          </div>
          <div className="container__ticketPayMethood__Ticket__Taxs">
            <p>Tax</p>
            <p>$360.00</p>
          </div>
          <div className="container__ticketPayMethood__Ticket__Total">
            <p>Total</p>
            <p>$3,260.00</p>
          </div>
        </section>
        <section className="container__ticketPayMethood_PayMethood">
          <h2>Payment Method</h2>
          <div className="container__ticketPayMethood_PayMethood--SPEI">
            <input
              type="radio"
              name=""
              className="cbox1"
              id="cbox1"
              value="checkbos"
            />
            <label>SPEI </label>
          </div>
          <div className="container__ticketPayMethood_PayMethood--CeditCard">
            <input
              type="radio"
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
