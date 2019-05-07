const db = require("../models");

module.exports = {

    createCar: function(req, res) {
        console.log(req.body)
db.Car
          .create( {      
            nickname: req.body.nickname,
            plate: req.body.plate,
            initialMileage: req.body.initialMileage,
            oilMileage: req.body.oilMileage,
            filterMileage: req.body.filterMileage,
            tireMileage: req.body.tireMileage, 
            batMileage: req.body.batMileage,
            brakeMileage: req.body.brakeMileage,
            UserId: 1
        })
          .then(console.log("save successful"))
          .catch(err => res.status(422).json(err));
      },
      createTrip: function(req, res) {
        console.log(req.body)
db.Trip
          .create( {      
            date: req.body.date,
            totalmiles: req.body.totalmiles,
            CarId: 2
        })
          .then(console.log("save successful"))
          .catch(err => res.status(422).json(err));
      }
    }
        