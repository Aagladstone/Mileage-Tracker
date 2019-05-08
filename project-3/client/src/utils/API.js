import axios from "axios";

export default {
  
  // Saves a car to the database 
   getCarName: function() {
     console.log("2")
    return axios.get("/api/car")
  },
  saveCar: function(CarData) {
    console.log(CarData)
    return axios.post("/api/car", CarData);  
  },
  saveTrip: function(TripData) {
    console.log(TripData);
    return axios.post("/api/trip", TripData)
  },
  getTripType: function() {
    return axios.get("/api/trippurpose")
  }


};