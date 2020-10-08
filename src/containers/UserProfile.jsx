import React from "react"
import Header from "../components/Header"
import avatar from "../assets/static/profile.jpg"
import "../assets/styles/components/UserProfile.scss"
import "../assets/styles/components/UserEdit.scss"

const User = () => {
  return (
    <>
      <Header showSearch={false} showSignInLogin={false} />
      <section className="container-user">
        <div className="container-photo">
          <figure className="container-photo-perfil">
            <img src={avatar} alt="Photo Perfil" />
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
        <div className="container-about">
          <h1>Hi! I'm {"<Nombre usuario>"}</h1>
          <h3>About of {"<Nombre usuario>"}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            labore reprehenderit ducimus nisi odio earum quibusdam laudantium
            voluptas? Dicta cupiditate eveniet, assumenda ea qui nesciunt in?
            Iusto non quidem doloribus!
          </p>
          <p>Live in Monterrey, Mexico</p>
        </div>
      </section>
    </>
  )
}

export default User
