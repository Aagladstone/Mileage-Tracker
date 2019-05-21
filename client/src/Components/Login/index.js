<<<<<<< HEAD

=======
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
import "./style.css";
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import { FormErrors } from '../../Pages/FormErrors';
<<<<<<< HEAD

=======
import Logo from '../../Components/Logo/index'
import Road from '../../Components/Road/index'
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectTo: null,
<<<<<<< HEAD
      // userMessage: ""
=======
      loginMessage: "",
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.goSignUp = this.goSignUp.bind(this)

  }

  goSignUp() {
    console.log(this.props);
<<<<<<< HEAD
    // document.location.pathname = '/signup'
=======
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
    this.props.history.push('/signup')

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
      // break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  handleSubmit(event) {
    event.preventDefault()
<<<<<<< HEAD

    // if (this.state.email === "") {
    //   this.setState({
    //     userMessage: "Plese enter the user email"
    //   })
    // } else if (this.state.password === "") {
    //   this.setState({
    //     userMessage: "Plese enter the password"
    //   })
    // } else {
=======
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
    API.postUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
<<<<<<< HEAD
        if (response.status === 200) {
=======
        console.log(response.data)

        if (!response.data.firstname) {
          this.setState({
            loginMessage: "Plese check your username"
          })
        } else if (!response.data.password) {
          this.setState({
            loginMessage: "oops ! worng password"
          })
        }

        else {
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          // update the state to redirect to home
          localStorage.setItem('user', response.data.firstname);
          localStorage.setItem('userid', response.data.id);
          this.setState({
            redirectTo: '/UserPage'
          })

        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
<<<<<<< HEAD
    // }
=======
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

<<<<<<< HEAD
      return (
        <div id="signin" >
          <h4>Login</h4>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <form className="pure-form pure-form-stacked">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="email">email</label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Password: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7"></div>
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit">Login</button>
            </div>
            <h5>{this.state.userMessage}</h5>
            <div className="row">
              <p className="col-3">Dont have an account ? </p>
              <div className=" col-3 form-group ">
                <button className="btn btn-primary" disabled={!this.state.formValid} type="submit" onClick={this.goSignUp} >
                  Sign Up
           </button>
              </div>
            </div>
          </form>
=======

      return (
        <div id="signin" >


          <div class="row">
            <div class="col-4" id="logo"> <Logo />



              <div class="row">

                <div class="col-4">
                </div>
                <div class="col-3">
                  <p id="loginmessage">Login</p>
                </div>
              </div>

              <div id="error" className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>


              <div class="row">


                <div class="col-3">
                </div>




                <form class="col-6" className="pure-form pure-form-stacked">
                  <div className="form-group">
                    <div className="col-1 col-ml-auto">
                      <label className="form-label" htmlFor="email"></label>
                    </div>
                    <div className="col-3 col-mr-auto">
                      <input className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-1 col-ml-auto">
                      <label className="form-label" htmlFor="password"></label>
                    </div>
                    <div className="col-3 col-mr-auto">
                      <input className="form-input"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="col-7"></div>
                    <button id="login"
                      className="btn-sm btn-primary col-mr-auto"
                      onClick={this.handleSubmit}
                      type="submit">Login</button>
                  </div>
                  <h5>{this.state.userMessage}</h5>


                </form>

              </div>


              <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6">
                  <p id="account">Don't you have an account?</p>
                </div>
              </div>



              <div class="row">
                <div class="col-4">
                </div>

                <button id="create" className="btn-sm btn-success" disabled={!this.state.formValid} type="submit" onClick={this.goSignUp} >
                  Create my account
              </button>
              </div>

              <div class="row">

                <div class="col-1">
                </div>
                <div class="col-10">
                  <p id="titletext">What we do.</p>
                </div>
              </div>

              <div class="row">

                <div class="col-1">
                </div>
                <div class="col-10">
                  <p id="initialmessage">We help you to organize your car mileage and also you car maintenance.</p>
                </div>
              </div>




            </div>



            <div class="col-5" id="road"> <Road /> </div>
          </div>

          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>


>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
        </div>
      )
    }
  }
}

export default LoginForm
<<<<<<< HEAD
=======


>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
