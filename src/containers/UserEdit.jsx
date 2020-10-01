import React from "react"
import Header from "../components/Header"
import avatar from "../assets/static/profile.jpg"
import "../assets/styles/components/UserEdit.scss"
import { Link } from "react-router-dom"

const UserEdit = () => {
  return (
    <>
      <Header showSearch={false} showSignInLogin={false} />
      <section className="container-edit">
        <div className="container-photo">
          <figure className="container-photo-perfil">
            <img src={avatar} alt="Photo Perfil" />
            <Link to="" className="update-photo">
              Update photo
            </Link>
          </figure>
          <div className="identify">
            <h2>Identify verification</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              consequatur veritatis expedita voluptas, quo minus minima aliquam
              velit sint dolores ducimus accusantium dolorem odio rem rerum
              nulla
            </p>
            <div className="confirmed">
              <p>Email address</p>
              <p>Phone number </p>
            </div>
          </div>
        </div>
        <div className="container-description">
          <h1>Hi! I'm {"<Nombre usuario>"}</h1>
          <h3>About of {"<Nombre usuario>"}</h3>
          <div className="form-container">
            <form action="">
              <textarea
                className="about"
                name=""
                id=""
                cols="50"
                rows="10"
              ></textarea>
              <label htmlFor="">Location</label>
              <input type="text" name="" id="" />
              <button className="button-cancel">Cancel</button>
              <button className="button-save">Save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserEdit
