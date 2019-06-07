import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';


function TripLog(props) {
  return <div className="tripLog">
    {props.children}
  </div>;
}

export default TripLog;

