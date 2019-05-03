import React, {Component} from "react";
import Wrapper from "../Components/Wrapper/index"
import {Welcome} from "../Components/Banner/index"
import CarDrop, {MtypeDrop} from "../Components/Dropdowns/index"
import AddCar, { AddTrip } from "../Components/Buttons/index";



class UserPage extends Component {

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

render() {    
    return (

        <Wrapper>
        <Welcome />
        <CarDrop> </CarDrop>
        <MtypeDrop> </MtypeDrop>
        <AddCar> </AddCar>
        <AddTrip> </AddTrip>
        </Wrapper>

    );
  
}
}
export default UserPage;