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
    var k = 0;
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
      // console.log('MAINTENANCE PROMISES')
      // console.log(maintenancePromises)
      // console.log('---------------------')
      return Promise.all(maintenancePromises)
        .then(responses => {
          // console.log('maintenance responses')
          // console.log(responses)
          // console.log('---------------------')
          sum = responses.reduce((arr, response) => {
            return arr.concat(
              {
                name: response.Maintenance.dataValues.type,
                frequency: response.Maintenance.dataValues.frecuency
              }
            )
          }, []);
          

          return Promise.all(responses.map(response => 

            db.Trip.findAll({
              where: {
                CarId: req.query.carId,
                CreatedAt: {
                  [Op.gte]:moment(response.dataValues.createdAt).format('YYYY-MM-DD')
                }
              }, 
              include: [db.Car]
            })
          ))
        })
        .then(responses => {

          for(var i = 0; i < responses[0].length; i++){
          // console.log('trip responses')
          // console.log(responses[0])
          // console.log(responses[0][i].dataValues.totalmiles)
          // console.log(totalmiles)
          totalmiles += parseInt(responses[0][i].dataValues.totalmiles)
          // console.log(i)
          // console.log(totalmiles)
          // console.log('---------------------')
          
          // console.log('SUM')
          console.log(sum)
          // console.log('---------------------')
          }

          for (var i = 0; i < responses.length; i++) {
            sum[i].mileage = totalmiles;
            // console.log(responses[0].length)
            // console.log(sum)
          }
          

          // console.log(sum)
          res.json(sum)
        })

      // for(var i = 0; i <= maintenancesArr.length; i++){
      //     db.Car_Maintenance.findOne({
      //   where: {
      //     CarId: req.query.carId,
      //     MaintenanceId: maintenancesArr[i]
      //   },
      //   order: [["CreatedAt", "DESC"]],
      //   include: [db.Maintenance]
      // })     
      //.then(response => {
        // sum.push({
        //   name: response.Maintenance.dataValues.type,
        //   frecuency: response.Maintenance.dataValues.frecuency
        // })
        
    //     .then(results => {    
    //       // console.log(results.Trip.Car[0])    
    //       totalmiles = 0;
    //       for(var j = 0; j < results.length ; j++){
    //         totalmiles += results[j].dataValues.totalmiles
    //       }
    //       // console.log(sum[k]);
    //       let obj = sum[k];
    //       // console.log(obj);
    //       let copyObj = Object.assign(obj, {mileage: totalmiles});
    //       // console.log(copyObj);
    //       // console.log(sum);
    //       array5 = sum;
    // // console.log(sum)

    //       k++;
    //     // return sum;
    //     })
    //   // return sum
    //   // console.log(maintenancesArr)
    //   // console.log(sum)
    //   // return sum;
    //      console.log(sum)
        //})      
    //}
    // console.log(maintenancesArr)
    // console.log("hello")
    // console.log(array5)

  }
}