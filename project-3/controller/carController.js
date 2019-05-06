const db = require("../models");

module.exports = {

    create: function(req, res) {
    console.log("4")
        db.Car
          .create( {       carName: req.body.carName,
            plate: req.body.plate,
            initialMileage: req.body.initialMileage,
            oilMileage: req.body.oilMileage,
            filterMileage: req.body.filterMileage,
            tireMileage: req.body.tireMileage, 
            batMileage: req.body.batMileage,
            brakeMileage: req.body.brakeMileage})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}