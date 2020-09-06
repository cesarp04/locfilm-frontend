import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logoh.png';
import iFilter from '../assets/static/i_filter.png' ;

const Header = () => (
    <header className="Header3">
        <figure className="Header3__logo">
            <a href="#"><img src={logo} alt="Logo"/> </a>
        </figure>

        <div className="Header3__Search">
            <div className="Header3__Search-input">
                <input type="text" placeholder="You Locations"/> 
            </div>

            <div className="Header3__Search-filter">
            <a href="#"><img src={iFilter} alt=""/></a>
            </div>
            <a href="#" className="Header3__Search-BtnSearch">
                <p>Search</p>
            </a>
        </div>

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