import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../utils/API'
import "./style.css";



class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: '',
      confirmPassword: '',
      redirectTo: null

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.firstname)
    event.preventDefault()

    //request to server to add a new username/password
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


  render() {

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div id="SignupForm">
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

      )
    }
  }
}

export default SignUp
