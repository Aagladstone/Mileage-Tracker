import axios from "axios";

export default {

  // Saves a car to the database 
  getCarName: function () {
    return axios.get("/api/car")
  },
  saveCar: function (CarData) {
    return axios.post("/api/car", CarData);
  },
  saveTrip: function (TripData) {
    return axios.post("/api/trip", TripData)
  },
  getTripType: function () {
    return axios.get("/api/trippurpose")
  }, 
  getTrip: function(car) {
    return axios.get("/api/trip", car)
  },
  postRegister:function(PostRegister){
    return axios.post("/user",PostRegister)
    },
    
    getRegister:function(){
      return axios.get("/user")
      },
    postUser:function(PostUser){
        return axios.post("/user/login",PostUser)
        }

};
