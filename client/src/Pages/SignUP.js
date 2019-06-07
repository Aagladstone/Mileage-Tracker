import React, { Component } from "react";
import SignUp from "../Components/SignUp";
import Wrapper from "../Components/Wrapper/index"
import Banner from "../Components/Banner";


class SignUp extends Component {
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