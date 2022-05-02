import React from 'react';
import error from '../../../img/error.png'
import './Error.css'

const Error = () => {
  return (
    <div className='container'>
      <div id="errorMes">
      <img style={{height:'100%'}} src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;