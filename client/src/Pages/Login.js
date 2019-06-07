import React, { Component } from "react";
import Login from "../Components/Login/index";
import Wrapper from "../Components/Wrapper/index"
import Banner from "../Components/Banner";

class Login extends Component {
    render() {
        return (
            <div id="login">
                <Wrapper>
                    <Banner />
                    <Login className="signin"> </Login>
                </Wrapper>
            </div>
        );
    }
}
export default Login;