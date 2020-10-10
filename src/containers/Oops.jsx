import React from "react"
import { Link } from "react-router-dom"
import "../assets/styles/components/Oops.scss"

const Oops = () => (
    <div className="wtf-Container">
        <h1 className="Oops-Title">Opps!</h1>
        <div className='error-banner'>
        <div className='error-404'></div>
        <p className="Oops-txt"> The page you were looking for doesn&apos;t exist.  We think the page may have moved. </p>
        <Link className="Oops-Come-back" to="/">
          <p className="Oops-Come-back--p">Come back!</p>
        </Link>
    </div>
    </div>
        

  );
  
  export default Oops
  


