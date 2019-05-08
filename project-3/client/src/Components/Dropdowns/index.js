import React from "react";
import "./style.css";

export default function CarDrop(props) {


  return (
  <div id="car">
    <div className="pure-menu pure-menu-horizontal" {...props}>
    </div>
    </div>
  )

  }


 {/* {this.props.state.CarName.length ? ( */}
 {/* //   <div class="pure-menu pure-menu-horizontal">
// //     <ul class="pure-menu-list">
// //     {this.props.state.CarName.map(car => ( */}
         {/* <li class="pure-menu-item pure-menu-selected" key={car.CarId}><a href="#" class="pure-menu-link">{car.nickname}</a></li> */}
     {/* ))} */}
   {/* </ul> */}
  {/* </div> */}


{/* ) : (<h3> Add a car to your Account </h3>} */}




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