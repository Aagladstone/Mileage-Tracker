import React from "react";
import Logo from "../../Components/Logo/index"
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

    return (
    <div className="jumbotron jumbotron-fluid" id="welcome">
    
    
    <div className="container">
    
      <p className="display-5"> <Logo id="logo" />Welcome {props.username},</p>
    </div>
  </div>
    )
  }

