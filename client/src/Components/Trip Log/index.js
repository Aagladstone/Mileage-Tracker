import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';


function TripLog(props) {


  return <div className="tripLog">
  

  <h4 className="logTitle"><u> Trip Log</u></h4>
  {props.children}
  </div>;
}

export default TripLog;

