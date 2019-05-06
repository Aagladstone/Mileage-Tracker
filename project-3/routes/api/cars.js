// const router = require("express").Router();
const carController = require("../../controller/carController");

// Matches with "/api/car"
// router.route("/api/car")
//   .post(carController.create);
//   console.log("3")

// module.exports = router;


module.exports = (app) => {
  app.post('/api/car', carController.create);
}