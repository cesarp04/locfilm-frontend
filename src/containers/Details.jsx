import React, { useState, useEffect } from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import DetailsMain from "../components/DetailsMain"
import { useParams } from 'react-router-dom'
import { getLocationById, getImagesLocation } from '../actions/locationActions'

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

        getImagesLocation(l.data.id)
          .then((response)=>{
            l.data.images = response.data;
            setLocation(l.data);
            setLoaded(true);
            setError(false);
          })
          .catch((response)=>{
            l.data.images = [];
            setLocation(l.data);
            setLoaded(true);
            setError(false);
          });
      })
      .catch((e) => {
        setLoaded(false);
        setError(true);
      });
  }, [setLocation,setLoaded,setError]);


  if (loaded) {
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
