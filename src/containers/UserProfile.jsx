import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Header from "../components/Header"
import avatar from "../assets/static/user-icon.png"
import "../assets/styles/components/UserProfile.scss"
import { getUser } from "../actions/usersActions"

const User = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.requestUser)

  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <>
      <Header showSearch={false} showSignInLogin={false} />
      <section className="container-user">
        <div className="container-photo">
          <figure className="container-photo-perfil">
            {data.picture ? (
              <img src={data.picture} alt="Photo Perfil" />
            ) : (
              <img src={avatar} alt="Photo Perfil" />
            )}
          </figure>

          <div className="container-about">
            <h1>Hi! I'm {data.username}</h1>

            {data.first_name ? (
              <p>Your first name:{data.first_name}</p>
            ) : (
              <p>
                Your first name:{"  "}
                <strong> You have not put any first name</strong>{" "}
              </p>
            )}
            {data.last_name ? (
              <p>Your last name:{data.last_name}</p>
            ) : (
              <p>
                Your last name: {"  "}
                <strong>You have not put any last name</strong>{" "}
              </p>
            )}
            {data.address ? (
              <p>Your address:{data.address}</p>
            ) : (
              <p>
                Your address: <strong>you have not put any address</strong>{" "}
              </p>
            )}
          </div>
          <Link to="/edit">Edit your profile</Link>
          <Link to="/">Back home</Link>
        </div>
      </section>
    </>
  )
}

export default User
