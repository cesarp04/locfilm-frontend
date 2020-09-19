import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logoh.png';
import SearchHeader from './SearchHeader';
import { Link } from 'react-router-dom'

const Header = ({ showSearch }) => (
    
    <header className="Header3">
        <figure className="Header3__logo">
            <a href="#"><img src={logo} alt="Logo"/> </a>
        </figure>
            {showSearch ? <SearchHeader/> : ''}
        <div className="Header3__SignLogin">
            <div className="Header3__SignLogin-Sign">
                <a href="#">Sign</a>
            </div>
            <div className="Header3__SignLogin-Login">
                <Link to="/login">Login</Link>
            </div>
        </div>
    </header>
);

export default Header;