import React from "react";
import "./style.css";

export default function CarDrop() {


  return (
  <div id="car">
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Car
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">car 1</a>
    <a className="dropdown-item" href="#">car 2</a>
  </div>
</div>
</div>
  )
}


export function MtypeDrop() {

    return (
        <div id="mType">
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Maintenance Type
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Oil Change</a>
      <a className="dropdown-item" href="#">Tire Rotation</a>
      <a className="dropdown-item" href="#">Air Filter Replacement</a>
      <a className="dropdown-item" href="#">Brake Check</a>
      <a className="dropdown-item" href="#">Battery Replacement</a>
    </div>
  </div>
  </div>
    )
  }