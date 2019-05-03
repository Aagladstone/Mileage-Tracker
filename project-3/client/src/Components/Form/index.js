import React from "react";
import "./style.css";


function SignIn() {

  return (

    
    <div id="signin"> 

<form className="pure-form pure-form-stacked">
    <fieldset>
        <legend>Please input your email and password</legend>

        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
        <span className="pure-form-message">This is a required field.</span>

        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
        <span className="pure-form-message">This is a required field.</span>

        <button type="submit" className="pure-button pure-button-primary">Sign In</button>
        <span className="pure-form-message">Don't have an account?</span>
        <button type="submit" className="pure-button pure-button-primary">Sign Up</button>

    </fieldset>
</form>
</div>
  );
}

export default SignIn;