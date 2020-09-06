import React from 'react';
import '../assets/styles/components/Footer.scss'
import logo from '../assets/static/logoh.png';

const Footer = () => (
    <footer>
    <section className="footerMain">
        <figure className="footerMain__logo">
            <a href="#">
                <img src={logo} alt="Logo"/>
            </a>
        </figure>
        <div className="footerMain__links">
            <a href="#">Privacy & Cookies Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Medidas Covid</a>
        </div>
        <div className="footerMain__Newsletter">
            <p>Newsletter</p>
            <p>Sign up for the newsletter</p>
        </div>
        <div className="footerMain__BtnNewsletter">
            <input type="text" placeholder="Your Email"/>
            <a href="#">Sucribe</a>
        </div>
    </section>
    <section className="footerCredits">
        <p>2020. <a href="#">PLATZI MASTER</a></p>
    </section>
</footer>
);    
   

export default Footer;