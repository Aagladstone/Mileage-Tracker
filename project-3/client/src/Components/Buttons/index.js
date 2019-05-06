import React from "react";
import "./style.css";

export default function AddCar(props) {


  return (
  <div id="addCar">
<button class="pure-button addCar">{props.children}</button>
</div>
  )
}

export function AddTrip() {


    return (
    <div id="addTrip">
  <button class="pure-button addTrip">Add a Trip</button>
  </div>
    )
  }

  
export function ResetMaint() {


  return (
  <div id="resetMaint">
<button class="pure-button resetMaint">Reset</button>
</div>
  )
}