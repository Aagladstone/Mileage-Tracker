import React, { Component } from 'react';
import { Route } from "react-router-dom";
import UserPage from './Pages/UserPage';
import Signup from "./Components/SignUp"
import LoginForm from './Components/Login'
import API from "./utils/API";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser = () => {
    API.getRegister().then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(response.data.user.firstname)
        this.setState({
          loggedIn: true,
          username: response.data.user.firstname
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Route
          exact path="/UserPage"
          component={UserPage} />

        <Route
          exact path="/"
          render={props =>
            <LoginForm {...props}
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route
          path="/NoMatch"
          render={() =>
            <Signup />}
        />
      </div>
    );
  }
}

export default App;



