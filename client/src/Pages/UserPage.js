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
import ScrollableTabsButtonAuto from "../Components/ScrollBar/Scroll"
import {Logout} from "../Components/Buttons/index"
import Barra from '../Components/Bar/index'
import Line from '../Components/Line/index'
import "./style.css";
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    backgroundColor: theme.palette.background.paper,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


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
    totalmiles: "",
    date: "",
    mileageType: "",
    CarName: [],
    Trip: [],
    TripType: [],
    maintenance: [],
    TripPurposeId: "",
    value: 0,
    CarId: "",
    purpose: "",
    loadingCar: false,
    loadingTrip: false,
    selectedCar: "",
    message: "",
    messageTrip:"",
    id: "",
    username: ""
  };

  componentDidMount() {  
    this.loadTripTypes();
    this.loadMaintenance();
    this.setState({
      username:localStorage.getItem('user'),
      id:localStorage.getItem('userid')
    }, () => {
      this.loadCars();
      console.log(this.state.id)
    });
        

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
          brakeMileage: this.state.brakeMileage,
          UserId: this.state.id
        })
        .then(res => {
          this.loadCars()
        })
        .catch(err => {
          console.log(err)
        });
    }
    if (this.state.loadingTrip) {
      API.saveTrip({
        CarId: this.state.selectedCar,
        date: this.state.date,
        totalmiles: this.state.totalmiles,
        TripPurposeId: this.state.TripPurposeId,
      }, 
      )
      .then(res => {
        this.loadTrip() 
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

loadCars = () => {
    // API.getCarName(car)
    API.getCarName(this.state.id)
      .then(res =>  { 
          this.setState({
          CarName: res.data,  
          nickname: "",
          plate: "",
          initialMileage: "",
          oilMileage: "",
          filterMileage: "",
          tireMileage: "", 
          batMileage: "",
          brakeMileage: "",
          loadingCar: false,
          message:"",
          selectedCar: res.data[0].id}, () => {this.loadTrip()})
        })
        .catch(
          err => console.log(err)
          );
  }

  loadTrip = () => {
   API.getTrip(this.state.selectedCar)
    .then(res =>       
      this.setState({
        Trip: res.data,
        date: "",
        totalmiles: "",
        purpose: "",
        CarId: this.state.selectedCar,
        loadingTrip: false
      })) 
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
    this.setState({TripPurposeId: key})
  }

  selectCar = car => {
    this.setState({
       CarId: car.id,
       selectedCar: car.id
    }, () => {this.loadTrip(this.state.selectedCar)})
       console.log(this.state.selectedCar)
  }

  logout = () => {
    localStorage.clear();

    this.setState({
      username: null,
      redirectTo: '/'
    })

    // if (this.state.redirectTo) {
    
    // }

  }

  loadMaintenance=() => {
    API.getMaintenance()
    .then(res => this.setState({maintenance: res.data}))
    .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.nickname === ""){
      this.setState({
        message: "Plese enter the car nickname"
      })
    }
    else if(this.state.plate === ""){
      this.setState({
        message: "Plese enter the car plate"
      });
    }else if(this.state.initialMileage === "" || this.state.initialMileage <= 0){
      this.setState({
        message: "Plese enter the initial mileage"
      })
    }else if(this.state.oilMileage === "" || this.state.oilMileage <= 0){
      this.setState({
        message: "Plese enter the mileage for the last oil change"
      })
    }else if(this.state.filterMileage === "" || this.state.filterMileage <= 0){
      this.setState({
        message: "Plese enter the milege for the last filter change"
      })
    }else if(this.state.tireMileage === "" || this.state.tireMileage <= 0){
      this.setState({
        message: "Plese enter the milege for the last tire change"
      })
    }else if(this.state.batMileage === "" || this.state.batMileage <= 0){
      this.setState({
        message: "Plese enter the milege for the last battery change"
      })
      console.log("")
    }else if(this.state.brakeMileage === "" || this.state.brakeMileage <= 0){
      this.setState({
        message: "Plese enter the milege for the last brake change"
      })
    }else{
      this.setState({ open: false, loadingCar: true });
    }
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    if(this.state.date === ""){
      this.setState({
        messageTrip: "Please insert the date"
      })
    }else if(this.state.totalmiles === "" || this.state.totalmiles <= 0){
      this.setState({
        messageTrip: "Please insert the total mileages for the trip"
      })
    }else if(this.state.TripPurposeId === ""){
      this.setState({
        messageTrip: "Please select the trip prurpose"
      })
    }else{
      this.setState({ open1: false, loadingTrip: true });
    }
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

   

   if (this.state.username) {

      return (
        <div>
          <Wrapper> <div id="logout">
            <button class="pure-button logout" type="submit" onClick={this.logout} >Logout</button>
          </div>
            <Welcome username={this.state.username}>

            </Welcome>



            {this.state.CarName.length ? (
              <div id="tabBar" className={classes.root} >
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                  >

                    {this.state.CarName.map(car => (

                      <div key={car.id} onClick={(e) => this.selectCar(car)}>
                        <Tab label={car.nickname} key={car.value} id={car.id} value={car.id} ></Tab>
                        {/* {this.loadTrip(this.state.selectedCar)} */}

                      </div>

                    ))}
                    <Button className="addCar" variant="outlined" color="primary" onClick={this.handleClickOpen}>
                      Add a Car
        </Button>
                  </Tabs>
                </AppBar>
                {/* <TabContainer></TabContainer> */}
                {console.log(this.state.selectedCar)}
                {console.log(this.state.Trip)}



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
                      required
                      autoFocus
                      onChange={this.handleInputChange}
                      margin="dense"
                      className={classes.textField}
                      id="nickname"
                      label="Car Name"
                      name="nickname"
                      value={this.state.nickname}
                      type="text"
                      fullWidth
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
                    <h5>* is a required field</h5>
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
                      required
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
                      required
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
                      required
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
                      required
                    />
                    <h5>{this.state.message}</h5>
                  </Grid>
                </Grid>
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

            <Grid container spacing={12}>
              <Grid className="" item xs={9}>
                <Line mileage={this.state.Trip} />
                <Barra
                  maintenance={this.state.maintenance}
                // miles={whatever we save in state as sum of totalmiles}
                />
                {/* <Barra maintenance={this.state.CarName} />
    <Barra maintenance={this.state.CarName} />
    <Barra maintenance={this.state.CarName} />
    <Barra maintenance={this.state.CarName} /> */}
              </Grid>
              <Grid id="tripTable" item xs={3}>

                <TripLog>

                  <Table className="tripTable">
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
                </TripLog>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen1} >
                  Add a Trip
      </Button>
              </Grid>
            </Grid>
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
                    shrink: true
                  }}
                />
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
                      <TPItem key={trip.id} id={trip.id} name="trippurpose">{trip.purpose}
                      </TPItem>
                    ))}
                  </TPList>
                ) : (<h6>Please insert Trip purposes</h6>)}
                <h5>{this.state.messageTrip}</h5>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose1} color="primary">
                  Cancel
            </Button>
                <Button onClick={this.handleFormSubmit2} color="primary">
                  Add Trip
            </Button>
              </DialogActions>
            </Dialog>

          </Wrapper>
        </div>
      );
    }
    else {
      return (
        <div>
          {this.state.redirectTo && <Redirect to={{ pathname: this.state.redirectTo }} />}
        "404 not found"
        </div>
      );
    }
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
UserPage.propTypes = {
  classes: PropTypes.object.isRequired
}
ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(UserPage);












  
  






 
