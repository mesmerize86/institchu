import React from 'react';
import LoadingStyle from "./loading-style";

const Loader =({message})=> {
  return (
    <LoadingStyle>
      <div className="loading">
        <p>{message}</p>
        <span></span>
      </div>
    </LoadingStyle>
  )
}

export default Loader;