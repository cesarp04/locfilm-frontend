import React, { useState, useEffect } from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import DetailsMain from "../components/DetailsMain"
import { useParams } from 'react-router-dom'
import { getLocationById } from '../actions/locationActions'

const Details = () => {

  // const [location, setLocation]= useState(null);
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState();

  let view = null;

  useEffect(() => {
    getLocationById(id)
      .then((l) => {

        setLocation(l.data);
        setLoaded(true);
        setError(false);
        console.log('datos ok: ', l.data);
      })
      .catch((e) => {
        console.log('error: ', e);
        setLoaded(false);
        setError(true);
      });
  }, [setLocation,setLoaded,setError]);


  if (location) {
    view = (
      <>
        <Header showSearch={false} showSignInLogin={true} />
        <DetailsMain location={location} />
      </>
    );
  } else if (!error) {
    view = (
      <>
        <Header showSearch={false} showSignInLogin={true} />
        <h1>Loading location {id}</h1>
      </>
    );
  } else {
    view = (
      <>
        <Header showSearch={false} showSignInLogin={true} />
        <h1>No se encontró la locación</h1>
      </>
    );
  }

  return view;
}
export default Details
