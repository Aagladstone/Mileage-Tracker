const router = require("express").Router();
const carController = require("../../controller/carController");


router.route("/")
  .post(carController.createTrip);

module.exports = router;
