import React from 'react';
import '../assets/styles/components/Avatar.scss'
import avatar from '../assets/static/profile.jpg'
import iUser from '../assets/static/i_user.png'
import iLogout from '../assets/static/i_logout.png'

const Avatar = () => (
    <div className="Header__Menu">
        <div className="Header__Menu--Profile">
            <img src={avatar} alt="Photo Profile"/>
            <p>Regina S.</p>
        </div>
    <ul>
        <li>
            <img src={iUser} alt=""/>
            <a href="#">My Acount</a>
        </li>
        <li>
            <img src={iLogout} alt=""/>
            <a href="#">Logout</a>
        </li>
    </ul>
</div>
);    
   

export default Avatar;