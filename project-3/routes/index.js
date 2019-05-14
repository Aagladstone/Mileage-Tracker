
const router = require("express").Router();
const carRoutes = require("./api/cars");
const tripRoutes = require("./api/trips");
const tripPurpose = require("./api/trippurpose");
const userRegister = require("./api/userRegister");
 const userLogin = require("./api/userLogin");
 const userLogout = require("./api/userLogout");
const userGet= require("./api/userGet");


// API Routes
router.use("/api/car", carRoutes);
router.use("/api/trip", tripRoutes);
router.use("/api/trippurpose", tripPurpose)
router.use("/user", userRegister)
 router.use("/user/login", userLogin)
router.use("/logout", userLogout)
router.use("/user", userGet)


module.exports = router;