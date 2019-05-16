import React from "react";
import "./style.css";

export default function Banner(props) {


  return (<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome to "Enter Name here"!</h1>
    <p className="lead">"Name" is used to track car trips and make sure you are keeping up with your car maintenance.</p>
  </div>
</div>
  )
}


export function Welcome(props) {

    return (<div className="jumbotron jumbotron-fluid" id="welcome">
    <div className="container">
      <h2 className="display-5">Welcome {props.username}</h2>
    </div>
  </div>
    )
  }

