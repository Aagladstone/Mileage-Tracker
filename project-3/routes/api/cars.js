const router = require("express").Router();
const carController = require("../../controller/carController");


router.route("/")
  .post(carController.create);
  console.log("3")

module.exports = router;

