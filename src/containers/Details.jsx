import React, { useState } from "react"
import "../assets/styles/App.scss"

import Header from "../components/Header"
import DetailsMain from "../components/DetailsMain"
import {useParams} from 'react-router-dom'
import {getLocationById} from '../actions/locationActions'
import { useDispatch, useSelector } from "react-redux"

const Details = () => {

  // const [location, setLocation]= useState(null);
  const {id} = useParams();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  let view = null;

  const location = getLocationById(id);
  console.log(location);
    // .then((l)=>{
    //   if(l){
    //     setLocation(l.data);
    //     console.log('datos ok: ',location);
    //     setError(true);
    //     setLoaded(true);
    //   }else{
    //     console.log('datos malos: ',l);
    //     setError(true);
    //   }
    // })
    // .catch((e)=>{
    //     console.log('error: ',e);
    //     setLoaded(false);
    //     setError(true);
    // });

  if(location)
  {
    view = (
      <>
        <Header showSearch={false} showSignInLogin={true} />
        <DetailsMain location={location} />
      </>
    );
  }else if(!error){
    view = (
      <>
        <Header showSearch={false} showSignInLogin={true} />
        <h1>Loading location {id}</h1>
      </>
    );
  }else{
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
