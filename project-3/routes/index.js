
const router = require("express").Router();
const carRoutes = require("./api/cars");
const tripRoutes = require("./api/trips");



// API Routes
router.use("/api/car", carRoutes);
router.use("/api/trip", tripRoutes);



module.exports = router;