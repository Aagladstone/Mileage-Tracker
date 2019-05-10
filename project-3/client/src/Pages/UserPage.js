import React, {Component} from "react";
import Wrapper from "../Components/Wrapper/index"
import {Welcome} from "../Components/Banner/index"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./style.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API'
import  {/* List, ListItem,*/ TabContainer } from "../Components/List/List";
import TPList, { TPItem } from "../Components/Dropdowns/index"
import TripLog from "../Components/Trip Log/index"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MuiVirtualizedTable from '../Components/Trip Table/TripTable'

    const styles = theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    });


class UserPage extends Component {

  state = {
    open: false,
    open1: false,
    nickname: "",
    plate: "",
    initialMileage: "",
    oilMileage: "",
    filterMileage: "",
    tireMileage: "", 
    batMileage: "",
    brakeMileage: "",
    // startingMileage: "",
    // startingAddress: "",
    // endAddress: "",
    totalmiles: "",
    date: "",
    mileageType: "",
    CarName: [],
    TripType: [],
    TripPurposeId: "",
    value: 0,
    CarId: "",
    flag: 0
  };

  componentDidMount() {
    this.loadCars();
    this.loadTripTypes();
  }


  loadCars = () => {
    API.getCarName()
      .then(res => this.setState({
          CarName: res.data,   
          nickname: "",
          plate: "",
          initialMileage: "",
          oilMileage: "",
          filterMileage: "",
          tireMileage: "", 
          batMileage: "",
          brakeMileage: "",
        })
      )
      .catch(err => console.log(err));
  }

  setFlag = () => {
    console.log("Load");
  };


  loadTripTypes = () => {
    API.getTripType()
    .then(res => this.setState({TripType: res.data, date: "", totalmiles: ""
    }))
    .catch(err => console.log(err));
  }

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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  selectPurpose = key => {
    console.log(key);
    this.setState({TripPurposeId: key})
  }

  selectCar = id => {
    console.log('firing')
    console.log(id);
    this.setState({CarId: id})
  }

  resetTripForm = () => { 
    this.setState({...this.state, date: '', totalmiles: ''
    })
  }

  resetCarForm = () => { 
    this.setState({...this.state,
    nickname: "",
    plate: "",
    initialMileage: "",
    oilMileage: "",
    filterMileage: "",
    tireMileage: "", 
    batMileage: "",
    brakeMileage: ""
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
        this.setState({ open: false });
      API.saveCar({
        nickname: this.state.nickname,
        plate: this.state.plate,
        initialMileage: this.state.initialMileage,
        oilMileage: this.state.oilMileage,
        filterMileage: this.state.filterMileage,
        tireMileage: this.state.tireMileage, 
        batMileage: this.state.batMileage,
        brakeMileage: this.state.brakeMileage
      })
        .then(res => this.resetCarForm(), this.loadCars())

        .catch(err => console.log(err));
  };
  handleFormSubmit2 = event => {
    event.preventDefault();
        this.setState({ open1: false });
      API.saveTrip({
        date: this.state.date,
        totalmiles: this.state.totalmiles,
        TripPurposeId: this.state.TripPurposeId,
      })
        .then(res =>  this.resetTripForm(), this.loadTripTypes())
        .catch(err => console.log(err));
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

render() {    
    const { value } = this.state;
    const { classes } = this.props;
  return (

<div>
        <Wrapper>
        <Welcome />
        {/* {this.state.CarName.length ? (
        <List> 
      {this.state.CarName.map(car => (
        <ListItem className="pure-menu-item pure-menu-selected pure-menu-link" key={car.id}>{car.nickname} </ListItem> 
     ))}       
          <Button variant="outlined" className="addCar" color="primary" onClick={this.handleClickOpen}>
          Add a Car 
        </Button>   
  </List>
  ) : (
    <div>
    <h3> Add a car to your Account: </h3>
    <Button className="addCar" variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Add a Car 
      </Button>
    </div> ) */}
{/* } */}
    {this.state.CarName.length ? (      
      <div className={classes.root} >

        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >

        {this.state.CarName.map(car => (
            <div key={car.id} onClick={(e) => this.selectCar(parseInt(e.target.id))}>
              <Tab  label={car.nickname} id={car.id} value={car.id} ></Tab> 

            {/* <TabContainer>{car.id}</TabContainer> */}
            </div>
            
          ))}
          <Button className= "addCar" variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add a Car 
        </Button>  
          </Tabs>
        </AppBar> 

    </div>      
         ) : (
          <div>
          <h3> Add a car to your Account: </h3>
          <Button className="addCar" variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Add a Car 
            </Button>
          </div>
          )    
         }

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >


          <DialogTitle id="form-dialog-title">Car</DialogTitle>

          <DialogContent >
            <DialogContentText>
             Add a Car to your profile
            </DialogContentText> 
            <Grid container spacing={24}>
            <Grid item xs={6}>
             <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="nickname"
              label="Car Name"
              name="nickname"
              value={this.state.nickname}
              type="text"
              fullWidth
              required
            />
              <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="plate"
              label="Plate"
              name="plate"
              value={this.state.plate}
              type="text"
              fullWidth
              required
            />

              <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="initial-mileage"
              label="Initial Mileage"
              name="initialMileage"
              value={this.state.initialMileage}
              type="number"
              fullWidth
              required
            />   


              <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="Mileage at last oil change"
              label="Mileage at last oil change"
              name="oilMileage"
              value={this.state.oilMileage}
              type="number"
              fullWidth
              required
            /> 
            </Grid>
           <Grid item xs={6}>
          <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="Mileage at last air filter change"
              label="Mileage at last air filter change"
              name="filterMileage"
              value={this.state.filterMileage}
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="Mileage at last tire rotation"
              label="Mileage at last tire rotation"
              name="tireMileage"
              value={this.state.tireMileage}
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="Mileage at last battery change"
              label="Mileage at last battery change"
              name="batMileage"
              value={this.state.batMileage}
              type="number"
              fullWidth
            />
             <TextField
              autoFocus
              onChange={this.handleInputChange}
              margin="dense"
              id="Mileage at last break check"
              label="Mileage at last break check"
              name="brakeMileage"
              value={this.state.brakeMileage}
              type="number"
              fullWidth
            /> 
       </Grid>
       </Grid>
       <h6>* is a required field</h6>
          </DialogContent> 
         <DialogActions>   
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button className="addCar" onClick={this.handleFormSubmit} color="primary">
              Add Car
            </Button>
          </DialogActions>
        </Dialog>
        <br></br><br></br><br></br>
        <TripLog>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen1}>
          Add a Trip 
        </Button>
        </TripLog>  
          <MuiVirtualizedTable>

          </MuiVirtualizedTable>

        {/* Add a Trip dialog */}

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
                onChange={this.handleInputChange}
                label="Date of trip"
                type="date"
                name="date"
                value={this.state.date}
                defaultValue="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Starting Mileage"
              name="startingMileage"
              onChange={this.handleInputChange}
              value={this.state.startingMileage}
              type="text"
              fullWidth
              required
            />
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Starting Address"
              name="startingAddress"
              onChange={this.handleInputChange}
              value={this.state.startingAddress}
              type="text"
              fullWidth
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ending Address"
              name="endingAddress"
              onChange={this.handleInputChange}
              value={this.state.endingAddress}
              type="text"
              fullWidth
              required
            /> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Total Mileage"
              name="totalmiles"
              onChange={this.handleInputChange}
              value={this.state.totalmiles}
              type="number"
              fullWidth
              required
            />
            <p>Trip Type:</p>
              {this.state.TripType.length ? (
              <TPList onChange={(e) => {
                this.selectPurpose(parseInt(e.target.value))
              }}> 
              <option label="Select Trip Type" disabled selected></option>
              {this.state.TripType.map(trip => (
                <TPItem key={trip.id} id={trip.id}>{trip.purpose}
            </TPItem> 
            ))}      
          </TPList>
          ) : (<h6> null </h6>)}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose1} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit2}  color="primary">
              Add Trip
            </Button>
          </DialogActions>
        </Dialog>

        </Wrapper>
        </div>

    
 );
         
   
}

      };
      UserPage.propTypes = {
        classes: PropTypes.object.isRequired
      }
      UserPage.propTypes = {
        classes: PropTypes.object.isRequired,
      };
      TabContainer.propTypes = {
        children: PropTypes.node.isRequired,
      };

export default withStyles(styles)(UserPage);
// export withStyles(styles)(UserPage);









// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// });










  
  






 