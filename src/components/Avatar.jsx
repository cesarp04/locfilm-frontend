import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import "../assets/styles/components/Avatar.scss"
import avatar from "../assets/static/user-icon.png"
import { getUser, setError } from "../actions/usersActions"

const Avatar = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.requestUser)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className="Header__Menu">
      <div className="Header__Menu--Profile">
        {data.picture ? (
          <img src={data.picture} alt="Photo Profile" />
        ) : (
          <img src={avatar} alt="Photo Profile" />
        )}
        <p>{data.username}</p>
      </div>
      <ul>
        <li>
          <Link to="/user">My Acount</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              localStorage.clear()
              dispatch(setError())
            }}
            to="/login"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Avatar
