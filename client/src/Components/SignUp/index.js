import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../utils/API'
import "./style.css";
<<<<<<< HEAD

=======
import { FormErrors } from '../../Pages/FormErrors';
import Logo from '../../Components/Logo/index'
import Roadimage1 from '../../Components/Roadimage1/index'
import Roadimage2 from '../../Components/Roadimage2/index'
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab


class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: '',
      confirmPassword: '',
      redirectTo: null,
<<<<<<< HEAD
      signupMessage: ""
=======
      signupMessage: "",
      formErrors: { firstname: '', lastname: '', email: '', password: '', confirmPassword: '' },
      firstnameValid: false,
      lastnameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
<<<<<<< HEAD
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()

    //request to server to add a new username/password
    if(this.state.firstname === ""){
      this.setState({
        signupMessage: "Plese enter your Name"
      })
    }else if(this.state.lastname === ""){
      this.setState({
        signupMessage: "Plese enter your Last Name"
      })
    } else if(this.state.email === ""){
      this.setState({
        signupMessage: "Plese enter your email address"
      })
    }else if(this.state.password === ""){
      this.setState({
        signupMessage: "Plese enter your password"
      })
    }else if(this.state.confirmPassword === ""){
      this.setState({
        signupMessage: "Plese confirm your password"
      })
    }else if(this.state.password !== this.state.confirmPassword){
      this.setState({
        signupMessage: "The passwords don't match",
        password:"",
        confirmPassword:""
      })
    } else{
      API.postRegister( {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
  
      })
        .then(response => {
          console.log(response)
          if (!response.data.errmsg) {
            console.log('successful signup')
            this.setState({ //redirect to login page
              redirectTo: '/'
            })
          } else {
            console.log('email already taken')
          }
        }).catch(error => {
          console.log('signup error: ')
          console.log(error)
  
        })
    }
=======
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.confirmPasswordValid
    switch (fieldName) {

      case 'firstname':
        firstnameValid = value !== "";
        fieldValidationErrors.firstname = firstnameValid ? '' : 'is required';
        break;
      case 'lastname':
        lastnameValid = value !== "";
        fieldValidationErrors.lastname = lastnameValid ? '' : 'is required';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        if (emailValid === null)
          emailValid = false;
        else
          emailValid = true;
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      case 'confirmPassword':
        confirmPasswordValid = this.state.password === this.state.confirmPassword;
        fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' doesnt match';
        break;
      default:
        break;
      // break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstnameValid: firstnameValid,
      lastnameValid: lastnameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
      confirmPasswordValid: confirmPasswordValid
    }, this.validateForm);
  }



  validateForm() {

    console.log("firstname");
    console.log(this.state.firstnameValid);
    console.log("lastname");
    console.log(this.state.lastnameValid);
    console.log("email");
    console.log(this.state.emailValid);
    console.log("password");
    console.log(this.state.passwordValid);
    console.log("confirm password");
    console.log(this.state.confirmPasswordValid);
    this.setState({ formValid: this.state.firstnameValid && this.state.lastnameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid });
    console.log("form valid");
    console.log(this.state.formValid);
  }



  handleSubmit(event) {
    event.preventDefault()
    API.postRegister({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,

    })
      .then(response => {
        console.log(response.data)
        if (!response.data.error) {
          console.log('successful signup')
          this.setState({ //redirect to login page
            redirectTo: '/'

          })
        } else {
          this.setState({
            signupMessage: "email already taken"
          })
          console.log('email already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)

      })

>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
  }


  render() {

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div id="SignupForm">
<<<<<<< HEAD
          <h4>Sign up</h4>
          <form className="pure-form pure-form-stacked">
            <div className="form-group">
              <div className="col-7">
                <label className="form-label" htmlFor="firstname">First Name:</label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-7">
                <label className="form-label" htmlFor="lastname">Last Name:</label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-3 col-ml-auto">
                <label className="form-label" htmlFor="email">email: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-3 col-ml-auto">
                <label className="form-label" htmlFor="password">Password: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="password"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-7 ">
                <label className="form-label" htmlFor="Confirm Password">Confirm Password: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <h5>{this.state.signupMessage}</h5>
            <div className="form-group ">
              <div className="col-7"></div>
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >Sign up</button>
            </div>
          </form>
        </div>

=======
          <div class="row">
            <div className="roadImageOne" class="col-4">
              <Roadimage1 />
            </div>
            <div class="col-3">
              <div id="logo"> <Logo /> </div>
              <div id="error" className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <div>
                <h5>{this.state.signupMessage}</h5>
              </div>

              <form className="pure-form pure-form-stacked">
                <div className="form-group">

                  <div className="col-3 col-mr-auto">
                    <input className="form-input"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-3 col-mr-auto">
                    <input className="form-input"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-3 col-mr-auto">
                    <input className="form-input"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-3 col-mr-auto">
                    <input className="form-input"
                      placeholder="password"
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-3 col-mr-auto">
                    <input className="form-input"
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <div className="col-7"></div>
                  <button id="signup"
                    className="btn btn-primary  col-mr-auto"
                    onClick={this.handleSubmit}
                    disabled={!this.state.formValid}
                    type="submit"
                  >Sign up</button>
                </div>
              </form>

            </div>

            <div className="roadImageTwo" class="col-5">
              <Roadimage2 />
            </div>
          </div>
        </div>
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
      )
    }
  }
}

export default SignUp
