const router = require("express").Router();
const carController = require("../../controller/carController");


router.route("/")
  .post(carController.createTrip);
  console.log("3")

module.exports = router;
