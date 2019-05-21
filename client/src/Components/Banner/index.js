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
<<<<<<< HEAD:client/src/Components/Banner/index.js
      <h2 className="display-5">Welcome {props.username}</h2>
=======
      <p className="display-5">Welcome {props.username},</p>
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab:client/src/Components/Banner/index.js
    </div>
  </div>
    )
  }

