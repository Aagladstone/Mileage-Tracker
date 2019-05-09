import axios from "axios";

export default {

  // Saves a car to the database
  saveCar: function (CarData) {
    console.log("0");
    console.log(CarData)
    return axios.post("/api/car", CarData);

  },

  addUserToDB: (userData) => {
    return axios.post("/register", userData);
    console.log(userData)
  }
};



