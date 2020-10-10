import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { SUCCESS_STATUS } from "../types/states"

import "../assets/styles/components/Header.scss"
import logo from "../assets/static/logoh.png"
import SearchHeader from "./SearchHeader"
import SignInLogin from "./SignInLogin"
import Avatar from "./Avatar"

const Header = ({ showSearch }) => {
  const { status } = useSelector((state) => state.auth)

  return (
    <header className="Header">
      <figure className="Header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />{" "}
        </Link>
      </figure>
      {showSearch ? <SearchHeader /> : ""}
      {status === SUCCESS_STATUS ? <Avatar /> : <SignInLogin />}
    </header>
  )
}

export default Header
