
import "./style.css";
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectTo: null
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    API.postUser( {
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
          this.setState({
            redirectTo: '/UserPage'
          })

        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

      return (
        <div id="signin" >
          <h4>Login</h4>
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
            <div className="row">
              <p className="col-3">Dont have an account ? </p>
              <div className=" col-3 form-group ">
                <button className="btn btn-primary" type="submit" onClick={this.goSignUp} >
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
