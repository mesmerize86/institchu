import React from 'react';
import LoadingStyle from "./loading-style";

const Loader =()=> {
  return (
    <LoadingStyle>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </LoadingStyle>
  )
}

export default Loader;