import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import classes from "./styles.module.scss";
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={classes.main}>
      <div>
      <FontAwesomeIcon className={classes.emoji} icon= { faFaceSadTear }/>
      </div>
      <div className={classes.foot}>
      <h1 className={classes.title}>PAGE NOT FOUND</h1>
      <h5> <i>We looked everywhere for this page.</i> </h5>
      <h5> <i>Are you sure the website URL is correct?</i> </h5>
      <h5> <i>Get in touch with the site owner.</i> </h5>
      <Link to="/"><button>Go Back Home</button></Link>
      </div>
    </div>
    
  )
}

export default NotFoundPage