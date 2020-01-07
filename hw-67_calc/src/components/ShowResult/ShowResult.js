import React from "react";
import './ShowResult.css';

const ShowResult= ({value}) => {
  return (
    <input className='ShowResult' value={value} readOnly="readonly"></input>
  );
};

export default ShowResult;