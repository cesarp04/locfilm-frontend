import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import Header from "../components/Header"
import avatar from "../assets/static/user-icon.png"
import { SUCCESS_STATUS } from "../types/states"
import { pacthUser, setStatus } from "../actions/udpateUserActions"
import "../assets/styles/components/UserEdit.scss"

const UserEdit = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.requestUser)
  const { status } = useSelector((state) => state.updateUser)

  const { username, first_name, last_name, address } = data

  const [form, setValues] = useState({
    username: username,
    first_name: first_name,
    last_name: last_name,
    address: address,
  })

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(pacthUser(form))
  }
  if (status === SUCCESS_STATUS) {
    dispatch(setStatus())
    history.push("/user")
  }
  return (
    <>
      <Header showSearch={false} />
      <section className="container-chiff">
        <section className="container-edit">
          <div className="container-photoEdit">
            <h1 className="container-photoEdit-title">Edit your profile</h1>
            <figure className="container-photoEdit-perfil">
              {data.picture ? (
                <img className="container-photoEdit-perfil--img" src={data.picture} alt="Photo Perfil" />
              ) : (
                <img className="container-photoEdit-perfil--img" src={avatar} alt="Photo Perfil" />
              )}
            </figure>
            <form onSubmit={handleUpdate} className="edit__container-form">
              {/* <input
                type="file"
                placeholder="Update photo"
                className="custom-file-input"
                name="picture"
                accept="image/png, image/jpeg"
                onChange={updateInput}
              /> */}
              {data.username ? (
                <label htmlFor="">Your username: {data.username}</label>
              ) : (
                <label htmlFor="">
                  Your username: you don&apos;t have this full field
                </label>
              )}
              <input
                type="text"
                name="username"
                className="edit__container--input"
                placeholder="username"
                autoComplete="off"
                onChange={updateInput}
              />
              {data.first_name ? (
                <label htmlFor="">Your first name: {data.first_name}</label>
              ) : (
                <label htmlFor="">
                  Your first name: you don&apos;t have this full field
                </label>
              )}
              <input
                type="text"
                name="first_name"
                className="edit__container--input"
                placeholder="first name"
                autoComplete="off"
                onChange={updateInput}
              />
              {data.last_name ? (
                <label htmlFor="">Your last name: {data.last_name}</label>
              ) : (
                <label htmlFor="">
                  Your last name: you don&apos;t have this full field
                </label>
              )}
              <input
                type="text"
                name="last_name"
                className="edit__container--input"
                placeholder="last name"
                autoComplete="off"
                onChange={updateInput}
              />
              {data.address ? (
                <label htmlFor="">Your address: {data.address}</label>
              ) : (
                <label htmlFor="">
                  Your address: you don&apos;t have this full field
                </label>
              )}
              <input
                type="text"
                name="address"
                className="edit__container--input"
                placeholder="address"
                autoComplete="off"
                onChange={updateInput}
              />
              <div className="container-btns">
                <button type="reset" className="button-cancel">
                  Cancel
                </button>
                <button type="submit" className="button-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      
    </>
  )
}

export default UserEdit
