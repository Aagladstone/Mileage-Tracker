import axios from "axios";

export default {

  // Saves a car to the database 
  getCarName: function (user) {
    console.log(user)
    return axios.get("/api/car", {
      params: {
        UserId: user
      }})
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
    console.log(car)
    return axios.get("/api/trip", {
      params: {
        carId: car
      }})
  },
  postRegister:function(PostRegister){
    return axios.post("/user", PostRegister)
    },
    
    getRegister:function(){
      return axios.get("/user")
      },
    postUser:function(PostUser){
        return axios.post("/user/login", PostUser)
        },
        getMaintenance:function(){
          return axios.get("/api/maintenance")
        }

};
