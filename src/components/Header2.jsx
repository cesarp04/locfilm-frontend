import React from 'react';
import '../assets/styles/components/Header2.scss'
import logo from '../assets/static/logoh.png';

const Header2 = () => (
    <header className="Header2">
        <figure className="Header2__logo">
            <a href="#"><img src={logo} alt="Logo"/> </a>
        </figure>
        <div className="Header2__Menu">
            <div className="Header2__Menu--Profile">
                <img src="./assets/img/profile.jpg" alt="Photo Profile"/>
                <p>Regina S.</p>
            </div>
            <ul>
                <li>
                    <img src="./assets/icons/i_user.png" alt=""/>
                    <a href="#">My Acount</a>
                </li>
                <li>
                    <img src="./assets/icons/i_logout.png" alt=""/>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header2;