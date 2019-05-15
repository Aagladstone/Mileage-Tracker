const router = require("express").Router();
const carController = require("../../controller/carController");


router.route("/")
  .post(carController.createTrip)
  .get(carController.findTrips);

module.exports = router;
