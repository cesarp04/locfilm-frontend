import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logoh.png';
import SearchHeader from './SearchHeader';
import SignInLogin from './SignInLogin';
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const Header = ({ showSearch, showSignInLogin, showAvatar }) => (
    
    <header className="Header">
        <figure className="Header__logo">
            <Link href="/"><img src={logo} alt="Logo"/> </Link>
        </figure>
            {showSearch ? <SearchHeader/> : ''}
            {showSignInLogin ? <SignInLogin /> : <Avatar/>}
            {/* {showAvatar ? <Avatar/> : ''} */}
    </header>
);

export default Header;
