var Sequelize = require("sequelize");
const db = require("../models");
var Op = Sequelize.Op;
var moment = require("moment");

module.exports = {
  findAll: function (req, res) {
    db.Car.findAll({
      where: { UserId: req.query.UserId }
    })
      .then(function (results) {
        res.json(results);
      });
  },
  reset: function (req, res) {
    db.Car_Maintenance
      .create({
        mileage: 0,
        CarId: req.body.CarId,
        MaintenanceId: req.body.MaintenanceId
      }).then(response =>

        res.json(response))
      .catch(err => res.status(422).json(err))
  },
  createCar: function (req, res) {
    db.Car
      .create({
        nickname: req.body.nickname,
        plate: req.body.plate,
        initialMileage: req.body.initialMileage,
        UserId: req.body.UserId
      })
      .then(response =>
        db.Car.findOne({ where: { plate: req.body.plate } })

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
  createTrip: function (req, res) {
    db.Trip
      .create({
        date: req.body.date,
        totalmiles: req.body.totalmiles,
        CarId: req.body.CarId,
        TripPurposeId: req.body.TripPurposeId
      })
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  },
  findPurpose: function (req, res) {
    db.Trip_Purpose.findAll({}).then(function (results) {
      res.json(results);
    });
  },
  findTrips: function (req, res) {
    db.Trip.findAll({
      where: {
        CarId: req.query.carId
      },
      order: ['date'],
      include: [db.Trip_Purpose]
    }).then(function (results) {
      return res.json(results);
    });
  },
  getMaintenance: function (req, res) {

    const maintenancesArr = [1, 2, 3, 4, 5];
    let sum = [];
    var k = 0;
    var totalmiles = 0;
    var totalmiles1 = 0;
    var mileage = [];
    var mileagetotal = 0;

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
    // console.log('MAINTENANCE PROMISES')
    // console.log(maintenancePromises)
    // console.log('---------------------')
    return Promise.all(maintenancePromises)
      .then(responses => {
        // console.log("hello")
        // console.log(maintenancePromises)
        sum = responses.reduce((arr, response) => {

          //console.log(response.dataValues.MaintenanceId)
          return arr.concat(
            {
              name: response.Maintenance.dataValues.type,
              frequency: response.Maintenance.dataValues.frecuency,
              maintenanceId: response.dataValues.MaintenanceId
            }
          )
        }, []);

        return Promise.all(responses.map((response, i) => {
          sum[i].createdDate = moment(response.dataValues.createdAt).format('YYYY-MM-DD');
          return db.Trip.findAll({
            where: {
              CarId: req.query.carId,
              date: {
                [Op.gt]: moment(response.dataValues.createdAt).format("YYYY-MM-DD")
              }
            },
            include:
              [db.Car]
          })
        }
        ))
      })
      .then(responses => {
        console.log(responses[0].length);

        for (var i = 0; i < responses[0].length; i++) {
          totalmiles += parseInt(responses[0][i].dataValues.totalmiles)
        }

        for (var i = 0; i < responses.length; i++) {
          mileagetotal = 0;
          // sum[i].mileage = totalmiles;
          sum[i].trips = responses[i];
          sum[i].trips.forEach(trip => {
            console.log(trip.dataValues.date)
            mileagetotal += parseInt(trip.dataValues.totalmiles)
            mileage[i] = mileagetotal
            // console.log(totalmiles1 += trip.dataValues.totalmiles)

          })
          console.log('-----------------------')
          console.log(mileage);
          sum[i].mileage = mileage[i];
        }


        // console.log('SUM 00000')
        // console.log(sum[0].trips)
        res.json(sum)
      })
  },

}