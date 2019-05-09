const router = require("express").Router();
const carController = require("../../controller/carController");


router.route("/")

  .get(carController.findPurpose)



module.exports = router;