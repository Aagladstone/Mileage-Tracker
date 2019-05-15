const router = require("express").Router();
const userController = require("../../controller/userController");


router.route("/")
  .post(userController.userSignup);

module.exports = router;