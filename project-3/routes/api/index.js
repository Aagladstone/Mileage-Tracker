const router = require("express").Router();
const carRoutes = require("./cars");

// API Routes
router.use("/car", carRoutes);
console.log("2")

module.exports = router;
