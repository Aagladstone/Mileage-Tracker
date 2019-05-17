
import "./style.css";
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import { FormErrors } from '../../Pages/FormErrors';


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectTo: null,
      // userMessage: ""
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
    // document.location.pathname = '/signup'
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

    // if (this.state.email === "") {
    //   this.setState({
    //     userMessage: "Plese enter the user email"
    //   })
    // } else if (this.state.password === "") {
    //   this.setState({
    //     userMessage: "Plese enter the password"
    //   })
    // } else {
    API.postUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
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
    // }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

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
        </div>
      )
    }
  }
}

export default LoginForm
