const db = require("../models");

module.exports = {
      findAll: function(req, res) {
        db.Car.findAll({}).then(function(results) {
            res.json(results);
          });
        },
    createCar: function(req, res) {
        db.Car
          .create( {      
            nickname: req.body.nickname,
            plate: req.body.plate,
            initialMileage: req.body.initialMileage,
            UserId: 1
        })
          .then( 
           db.Car_Maintenance
            .create( {      
              mileage: req.body.oilMileage,
              CarId: 13,
              MaintenanceId: 1              
          }).then( 
            db.Car_Maintenance
             .create( {      
               mileage: req.body.filterMileage,
               CarId: 13,
               MaintenanceId: 3              
           }).then( 
            db.Car_Maintenance
             .create( {      
               mileage: req.body.tireMileage,
               CarId: 13,
               MaintenanceId: 2             
           }).then( 
            db.Car_Maintenance
             .create( {      
               mileage: req.body.batMileage,
               CarId: 13,
               MaintenanceId: 4             
           }).then( 
            db.Car_Maintenance
             .create( {      
               mileage: req.body.brakeMileage,
               CarId: 13,
               MaintenanceId: 5            
           }))
           .catch(err => res.status(422).json(err)))
           .catch(err => res.status(422).json(err)))
           .catch(err => res.status(422).json(err)))
           .catch(err => res.status(422).json(err)))
          .catch(err => res.status(422).json(err));
      },
      createTrip: function(req, res) {
        console.log(req.body)
        db.Trip
          .create( {      
            date: req.body.date,
            totalmiles: req.body.totalmiles,
            CarId: 13,
            TripPurposeId: req.body.TripPurposeId

        })
          .then(console.log("save UNSUCCESSFUL"))
          .catch(err => res.status(422).json(err));
      },
      findPurpose: function(req, res) {
        db.Trip_Purpose.findAll({}).then(function(results) {
            res.json(results);
          });
        }


    }
        