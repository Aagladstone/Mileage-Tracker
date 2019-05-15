import React, {Component} from "react";
import SignUp from "../Components/SignUp";
import Wrapper from "../Components/Wrapper/index"
import Banner from "../Components/Banner";


class SignUp extends Component {

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

render() {    
    return (
        <div id="signup">
        <Wrapper>
            <Banner />
            <SignUp className="signup"> </SignUp> 
        </Wrapper>
        </div>
    );
  
}
}
export default SignUp;