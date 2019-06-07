import axios from "axios";

export default {
  getCarName: function (user) {
    return axios.get("/api/car", {
      params: {
        UserId: user
      }
    })
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
  getTrip: function (car) {
    return axios.get("/api/trip", {
      params: {
        carId: car
      }
    })
  },
  postRegister: function (PostRegister) {
    return axios.post("/user", PostRegister)
  },

  getRegister: function () {
    return axios.get("/user")
  },
  postUser: function (PostUser) {
    return axios.post("/user/login", PostUser)
  },
  getMaintenance: function (car) {
    return axios.get("/api/maintenance", {
      params: {
        carId: car
      }
    })
  },
  resetCarMaint: function (clearMiles) {
    return axios.post("/api/clearmaint", clearMiles)
  }

};
