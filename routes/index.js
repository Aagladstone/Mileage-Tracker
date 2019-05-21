
const router = require("express").Router();
const carRoutes = require("./api/cars");
const tripRoutes = require("./api/trips");
const tripPurpose = require("./api/trippurpose");
const userRegister = require("./api/userRegister");
const userLogin = require("./api/userLogin");
const userLogout = require("./api/userLogout");
const userGet= require("./api/userGet");
<<<<<<< HEAD
const maintRoutes = require("./api/maintenance")
=======
const maintRoutes = require("./api/maintenance");
const carMaintRoutes = require("./api/clearMaint");
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab

// API Routes
router.use("/api/car/:user?", carRoutes);
router.use("/api/trip", tripRoutes);
router.use("/api/trippurpose", tripPurpose)
router.use("/user", userRegister)
router.use("/user/login", userLogin)
router.use("/logout", userLogout)
router.use("/user", userGet)
router.use("/api/trip/:car?", tripRoutes)
router.use("/api/maintenance/:car?", maintRoutes)
<<<<<<< HEAD
=======
router.use("/api/clearmaint", carMaintRoutes)
>>>>>>> 58838340a1723d1901b2123014e7c00ed32ee8ab



module.exports = router;