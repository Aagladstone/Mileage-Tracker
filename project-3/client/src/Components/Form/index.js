import React from "react";
import "./style.css";
import API from "../../utils/API";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { BrowserRouter as Router } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: ""
    }

    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
    debugger;
  };

  handleSaveClick = function (e) {

    const userData = {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      password: this.props.password,
      passowrd2: this.props.password2
    }
    e.preventDefault();
    API.addUserToDB(userData).then(
      (response) => {
        console.log(response);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }
  render() {

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

            <button type="submit" className="pure-button pure-button-primary">SIGN IN</button>
            <span className="pure-form-message">Don't have an account?</span>
            {/* Add a Car dialog */}
            <Button className="signup" variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Sign Up
        </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out all fields.
            </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  type="text"
                  onChange={this.handleInputChange}
                  value={this.props.firstname}
                  fullWidth
                />
                <TextField
                  autoFocus
                  onChange={this.handleInputChange}
                  margin="dense"
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  value={this.props.lastname}
                  type="text"
                  fullWidth
                />
                <TextField
                  autoFocus
                  onChange={this.handleInputChange}
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  value={this.props.email}
                  fullWidth
                />
                <TextField
                  autoFocus
                  onChange={this.handleInputChange}
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  value={this.props.password}
                  fullWidth
                />
                <TextField
                  autoFocus
                  onChange={this.handleInputChange}
                  margin="dense"
                  id="password2"
                  name="password2"
                  label="Re-enter Password"
                  type="password"
                  value={this.props.password2}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleSaveClick} color="primary">
                  Sign Up
            </Button>
              </DialogActions>
            </Dialog>

          </fieldset>
        </form>
      </div>
    );
  }
}
export default SignIn;