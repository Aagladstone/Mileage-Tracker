const path = require("path");
const router = require("express").Router();
const carRoutes = require("./cars");
const tripRoutes = require("./trips");


// API Routes
router.use("/car", carRoutes);
router.use("/trip", tripRoutes);

router.use(function(req, res) {
 
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
