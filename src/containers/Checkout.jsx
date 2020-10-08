import React from "react"
import "../assets/styles/components/Checkout.scss"
import Header from "../components/Header"
import Cross1 from "../assets/static/cross1.jpg"



const Checkout = () => (
    <>
      <Header showSearch={false} showSignInLogin={true} />
      <main className="container">
        <h2>
            Checkout
        </h2>
        <section className="container__imgDate">
            <figure className="container__imgDate--img">
                <img src={Cross1} alt=""/>
            </figure>
            <div  className="container__imgData__data">
                <h2>
                    Cencalli
                </h2>
                <div className="container__imgData__data--CheckIn">
                    <p>Check in</p>
                    <p>02 Nov. 2020</p>
                </div>
                <div className="container__imgData__data--CheckOut">
                    <p>Check out</p>
                    <p>05 Nov. 2020</p>
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
                    <input type="radio" name="" className="cbox1" id="cbox1" value="checkbos"/>
                    <label >SPEI </label>
                </div>
                <div className="container__ticketPayMethood_PayMethood--CeditCard">
                    <input type="radio" name="" className="cbox1" id="cbox1" value="checkbos"/>
                    <label >Credit Card </label>
                </div>
                <div className="container__ticketPayMethood_PayMethood--Terms">
                    <input type="checkbox" name="" className="cbox1" id="cbox1" value="checkbos"/>
                    <label >I Have read and accept the terms and conditions </label>
                </div>
                <a href="#" className="container__ticketPayMethood_PayMethood--btn">
                    Checkout
                </a>
            </section>
        </section>
    </main>
  
      
    </>
  )
  
  export default Checkout
  