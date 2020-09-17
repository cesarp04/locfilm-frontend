import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logoh.png';

const Header = () => (
    <header className="Header3">
        <figure className="Header3__logo">
            <a href="#"><img src={logo} alt="Logo"/> </a>
        </figure>

        <div className="Header3__SignLogin">
            <div className="Header3__SignLogin-Sign">
                <a href="#">Sign</a>
            </div>
            <div className="Header3__SignLogin-Login">
                <a href="#">Login</a>
            </div>
        </div>
    </header>
);

export default Header;