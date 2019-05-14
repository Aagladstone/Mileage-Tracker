
const router = require("express").Router();
const carRoutes = require("./api/cars");
const tripRoutes = require("./api/trips");
const tripPurpose = require("./api/trippurpose");



// API Routes
router.use("/api/car", carRoutes);
router.use("/api/trip", tripRoutes);
router.use("/api/trippurpose", tripPurpose)
router.use("/api/trip/:car?", tripRoutes)



module.exports = router;