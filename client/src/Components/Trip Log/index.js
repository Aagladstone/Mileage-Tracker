import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';


function TripLog(props) {


  return <div className="tripLog">
  

  <h4 className="logTitle">Trip Log</h4>
  {props.children}
  </div>;
}

export default TripLog;

