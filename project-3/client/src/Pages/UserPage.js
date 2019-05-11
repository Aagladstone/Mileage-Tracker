import React, {Component, Fragment} from "react";
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
import {Table, TableRow} from '../Components/Trip Table/TripTable'

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
    Trip: [],
    TripType: [],
    TripPurposeId: "",
    value: 0,
    CarId: "",
    purpose: "",
    loadingCar: false,
    loadingTrip: false,
    selectedCar: null

  };

  componentDidMount() {
    this.loadCars();
    this.loadTripTypes();
    this.loadTrip();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loadingCar) {

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
      .then(res => {
        // this.setState({ CarName: [...this.state.cars, res]})
        this.loadCars()
      })
      .catch(err => {
        console.log(err)
      });
    }
    console.log(this.state.loadingTrip)
    if (this.state.loadingTrip) {
      console.log("TRIP WORKING?")
      API.saveTrip({
        date: this.state.date,
        totalmiles: this.state.totalmiles,
        TripPurposeId: this.state.TripPurposeId,
      })
      .then(res => {
        console.log(res, 'WORKING')
        this.loadTrip() 
      })
      .catch(err => {
        this.loadTrip()
        console.log(err)
      });
    }

  }


  loadCars = () => {
    return API.getCarName()
      .then(res => this.setState({
          ...this.state,
          CarName: res.data,   
          nickname: "",
          plate: "",
          initialMileage: "",
          oilMileage: "",
          filterMileage: "",
          tireMileage: "", 
          batMileage: "",
          brakeMileage: "",
          loadingCar: false
        })
      )
      .catch(err => console.log(err));
  }

  loadTrip = () => {
    API.getTrip()
    .then(res =>       
      this.setState({
        Trip: res.data,
        date: "",
        totalmiles: "",
        purpose: "",
        loadingTrip: false
      })
    ) 
    .catch(err => console.log(err));
  }

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

  selectCar = car => {
    console.log('firing')
    this.setState({CarId: parseInt(car.id), selectedCar: car})
  }

  // resetTripForm = () => { 
  //   this.setState({...this.state, date: "", totalmiles: "", purpose: ""
  //   })
  // }

  // resetCarForm = () => { 
  //   this.setState({...this.state,
  //   nickname: "",
  //   plate: "",
  //   initialMileage: "",
  //   oilMileage: "",
  //   filterMileage: "",
  //   tireMileage: "", 
  //   batMileage: "",
  //   brakeMileage: ""
  //   })
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ open: false, loadingCar: true });
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    this.setState({ open1: false, loadingTrip: true });
  };

render() {    
    const { value } = this.state;
    const { classes } = this.props;
  return (

<div>
        <Wrapper>
        <Welcome />

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
            <div key={car.id} onClick={(e) => this.selectCar(car)}>
              <Tab  label={car.nickname} id={car.id} value={car.id} ></Tab> 
              {console.log(this.state.selectedCar)}
            </div>
            
          ))}
          </Tabs>
        </AppBar>  
        {/* <TabContainer></TabContainer> */}

        <Button className= "addCar" variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add a Car 
        </Button>  


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
        <br></br>          <br></br>
        <Table>
        {this.state.Trip.length ? (
          <Fragment>
              <tr><td>Date</td><td>Mileage</td><td>Purpose</td></tr>

               {this.state.Trip.map(triparr => (

               <TableRow> <td>{triparr.date}</td><td>{triparr.totalmiles}</td><td>{triparr.Trip_Purpose.purpose}</td> </TableRow> 

           
            ))}      
          </Fragment>
           ) : (<h6> Add a Trip with your car </h6>)
          }



        </Table>
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
      TabContainer.propTypes = {
        children: PropTypes.node.isRequired,
      };
      UserPage.propTypes = {
        classes: PropTypes.object.isRequired
      }
      UserPage.propTypes = {
        classes: PropTypes.object.isRequired,
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










  
  






 