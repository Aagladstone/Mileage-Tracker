var Sequelize = require("sequelize");
const db = require("../models");
var Op = Sequelize.Op;
var moment = require("moment");




module.exports = {
      findAll: function(req, res) {
        db.Car.findAll({
          where: {UserId: req.query.UserId}
        })
        .then(function(results) {
            res.json(results);
          });
        },
  reset: function(req, res) {
    console.log(req.body.CarId)
    console.log(req.body.MaintenanceId)

    db.Car_Maintenance
    .create({
      mileage: 0,
      CarId: req.body.CarId,
      MaintenanceId: req.body.MaintenanceId
    }).then(response => 
      
      res.json(response))
      .catch(err => res.status(422).json(err))
  },
    createCar: function(req, res) {
        db.Car
          .create({      
            nickname: req.body.nickname,
            plate: req.body.plate,
            initialMileage: req.body.initialMileage,
            UserId: req.body.UserId
        })
        .then(response => 
          db.Car.findOne({where: {plate: req.body.plate}})
        
          .then(response => {
            const maintenances = [req.body.oilMileage, req.body.tireMileage, req.body.filterMileage, req.body.batMileage, req.body.brakeMileage];
            const promises = maintenances.reduce((arr, maintenance, i) => {
              arr.push(
                db.Car_Maintenance.create({
                  mileage: maintenance,
                  CarId: response.id,
                  MaintenanceId: i + 1
                })
              )

              return arr;
            }, [])

            return Promise.all(promises)
              .then(response => res.json(response))
        })
        )
      },
      createTrip: function(req, res) {
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
              where: {
                CarId: req.query.carId
              }, 
              order: ['date'], 
              include: [db.Trip_Purpose]
            }).then(function(results) {
              return res.json(results);
            });
        },
  getMaintenance: function(req, res) {
    const maintenancesArr = [1, 2, 3, 4, 5];
    let sum = [];
    var totalmiles = 0;
    const maintenancePromises = maintenancesArr
      .reduce((arr, i) => {
        return arr.concat(
          db.Car_Maintenance.findOne({
            where: {
              CarId: req.query.carId,
              MaintenanceId: i
            },
            order: [["CreatedAt", "DESC"]],
            include: [db.Maintenance]
          }) 
        )
      }, []);
      console.log('MAINTENANCE PROMISES')
      console.log(maintenancePromises)
      // console.log('---------------------')
      return Promise.all(maintenancePromises)
        .then(responses => {
          sum = responses.reduce((arr, response) => {
            return arr.concat(
              {
                name: response.Maintenance.dataValues.type,
                frequency: response.Maintenance.dataValues.frecuency,
                maintenanceId: response.dataValues.MaintenanceId,
                date: response.dataValues.createdAt
              }
            )
          }, []);
            db.Trip.findAll({
              where: {
                CarId: req.query.carId,
                CreatedAt: {
                  [Op.gt]:moment(responses[0].dataValues.createdAt).format('YYYY-MM-DD')
                }
              }, 
              include: 
                [db.Car]
            })
          // responses.map((currElement, index) => {
          //   console.log("The current iteration is: " + index);
          //   console.log("The current element is: " + currElement);
          //   console.log("\n");
          //   return 'X';
          //  });
          // console.log(responses[0].dataValues.createdAt)
          // return Promise.all(responses.map(response => {
          return Promise.all(responses.map((currElement, index, responses) => {
            // console.log("The current iteration is: " + index);
            // console.log("The current element is: " + currElement);
            // console.log("\n");
          //  let k = 0
          //   console.log(k)
            // for(var k = 0; k < sum.length; k++){
              // console.log(sum[index].date)

              db.Trip.findAll({
                where: {
                  CarId: req.query.carId,
                  CreatedAt: {
                    [Op.gt]:moment(sum[index].date).format('YYYY-MM-DD')
                  }
                }, 
                include: 
                  [db.Car]
              })
            // }
          //   ,k+1
          }
          ))
        })
        .then(responses => {
          console.log("hello")
          for(var i = 0; i < responses[0].length; i++){

          totalmiles += parseInt(responses[0][i].dataValues.totalmiles)
          }

          for (var i = 0; i < responses.length; i++) {
            sum[i].mileage = totalmiles;
          }
          console.log(sum)
          console.log(this.responses)

          // for(var i = 0; i < responses[0].length; i++){

          // totalmiles += parseInt(responses[0][i].dataValues.totalmiles)
          // }

          // for (var i = 0; i < responses.length; i++) {
          //   sum[i].mileage = totalmiles;
          // }
          // console.log(sum)
          res.json(sum)
        })
  }

}