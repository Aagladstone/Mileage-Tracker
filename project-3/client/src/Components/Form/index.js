import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class SignIn extends React.Component {

  state = {
    open: false
  };

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
              id="name"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="text"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Re-enter Password"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
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