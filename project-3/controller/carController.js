const db = require("../models");


module.exports = {
      findAll: function(req, res) {
        db.Car.findAll({}).then(function(results) {
            res.json(results);
          });
        },
    createCar: function(req, res) {
        db.Car
          .create({      
            nickname: req.body.nickname,
            plate: req.body.plate,
            initialMileage: req.body.initialMileage,
            UserId: 1
        })
          .then(response => {
              const maintenances = [req.body.oilMileage, req.body.tireMileage, req.body.filterMileage, req.body.batMileage, req.body.brakeMileage];

              const promises = maintenances.reduce((arr, maintenance, i) => {
                arr.push(
                  db.Car_Maintenance.create({
                    mileage: maintenance,
                    CarId: 13,
                    MaintenanceId: i + 1
                  })
                )

                return arr;
              }, [])

              return Promise.all(promises)
                .then(response => res.json(response))
          });
      },
      createTrip: function(req, res) {
        console.log("HEELLLLOOO" + req.body.CarId)
        db.Trip
          .create( {      
            date: req.body.date,
            totalmiles: req.body.totalmiles,
            CarId: req.body.CarId,
            TripPurposeId: req.body.TripPurposeId

        })
          .then(response => res.json(response))
          .catch(err => res.status(422).json(err));
      },
      findPurpose: function(req, res) {
        db.Trip_Purpose.findAll({}).then(function(results) {
            res.json(results);
          });
        },
      findTrips: function(req, res) {
        

        db.Trip.findAll({   
          // where: {CarId: req.params.car},         
          order: [
          ['date', 'ASC']
        ],
          include: [db.Trip_Purpose]
        })
        .then(function(results) {
            res.json(results)
          });
        },

    }
        