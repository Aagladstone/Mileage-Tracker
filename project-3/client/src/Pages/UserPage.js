import React, {Component} from "react";
import Wrapper from "../Components/Wrapper/index"
import {Welcome} from "../Components/Banner/index"
import CarDrop from "../Components/Dropdowns/index"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class UserPage extends Component {

  state = {
    open: false,
    open1: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpen1 = () => {
    this.setState({ open1: true });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  

render() {    
      
  return (

<div>
        <Wrapper>
        <Welcome />
        <CarDrop> </CarDrop>
        
        {/* Add a Car dialog */}
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add a Car 
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Car</DialogTitle>
          <DialogContent>
            <DialogContentText>
             Add a Car to your profile
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="cName"
              label="Car Name"
              type="text"
              fullWidth
            />          
              <TextField
              autoFocus
              margin="dense"
              id="make"
              label="Make"
              type="text"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="model"
              label="Model"
              type="text"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="year"
              label="Year"
              type="text"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="plate"
              label="Plate"
              type="text"
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="mileage"
              label="Mileage"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Car
            </Button>
          </DialogActions>
        </Dialog>


        {/* Add a Trip dialog */}
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen1}>
          Add a Trip 
        </Button>
        <Dialog
          open={this.state.open1}
          onClose={this.handleClose1}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Trip</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a Trip for your Car
            </DialogContentText>
            <br></br>
              <TextField
                id="date"
                label="Date of trip"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Starting Mileage"
              type="text"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Starting Address"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ending Address"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Total Mileage"
              type="text"
              fullWidth
            />
          
            <select id="user-list" required>
            <option label="Select Trip Type"></option>
              <option value="Personal" name="" >Personal</option>
              <option value="Work" name="" >Work</option>
            </select>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose1} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose1} color="primary">
              Add Trip
            </Button>
          </DialogActions>
        </Dialog>

        </Wrapper>
        </div>

    );

}
}

export default UserPage;








 