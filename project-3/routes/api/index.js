const path = require("path");
const router = require("express").Router();
const carRoutes = require("./cars");

console.log("2")
// API Routes
router.use("/car", carRoutes);

router.use(function(req, res) {
 
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;