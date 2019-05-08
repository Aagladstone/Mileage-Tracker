import React from "react";
import "./style.css";

function TripLog(props) {


  return <div className="tripLog">{props.children}
  <h4 className="logTitle"><u > Trip Log</u></h4>
  
  </div>;
}

export default TripLog;

