import React from "react"
import { Link } from "react-router-dom"
import "../assets/styles/components/Avatar.scss"
import avatar from "../assets/static/profile.jpg"

const Avatar = () => (
  <div className="Header__Menu">
    <div className="Header__Menu--Profile">
      <img src={avatar} alt="Photo Profile" />
      <p>Regina S.</p>
    </div>
    <ul>
      <li>
        <Link to="/user">My Acount</Link>
      </li>
      <li>
        <Link to="/edit">Settings</Link>
      </li>
      <li>
        <Link to="#">Logout</Link>
      </li>
    </ul>
  </div>
)

export default Avatar
