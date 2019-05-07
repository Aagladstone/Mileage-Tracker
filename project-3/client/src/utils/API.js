import axios from "axios";

export default {
  
  // Saves a car to the database
  saveCar: function(CarData) {
    console.log("0");
    console.log(CarData)
    return axios.post("/api/car", CarData);  
  },
  saveTrip: function(TripData) {
    console.log("1");
    console.log(TripData);
    return axios.post("/api/trip", TripData)
  }

};