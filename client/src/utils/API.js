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
<<<<<<< HEAD
    console.log(car)
=======
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
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
        getMaintenance:function(car){
          return axios.get("/api/maintenance" ,{
            params: {
              carId: car
            }})
<<<<<<< HEAD
=======
        },
        resetCarMaint: function(clearMiles) {
          console.log(clearMiles)
          return axios.post("/api/clearmaint", clearMiles)
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab
        }

};
