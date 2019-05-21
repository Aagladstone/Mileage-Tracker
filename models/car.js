
module.exports = function(sequelize, DataTypes) {
    var Car = sequelize.define(
      "Car",
      {        
        nickname: {
        type: DataTypes.STRING,
        // validate: {
        // min:  1 
        // allowNull: false,
        // validate: {
        //   notNull: {
        //     msg: 'Please enter your name'
        //   }
          
        // }
        // }
      },
        plate: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [45]
          // validate: {
          //   required: true
          // }
        }
      },
      // {
      //   validate: {
      //     bothCoordsOrNone() {
      //       if ((this.nickname === null)) {
      //         throw new Error('Require either both latitude and longitude or neither')
      //       }
      //     }
      //   }
      // },
      {
        freezeTableName: true
      }
    );
    // Car.belongsTo(User,{as: 'fotos', foreignKey: 'userId'});
    Car.associate = function(models) {
        Car.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        }),
        Car.hasMany(models.Trip, {
            onDelete: "restrict",
            onUpdate: "restrict"
        }),
        Car.hasMany(models.Car_Maintenance, {
            onDelete: "restrict",
            onUpdate: "restrict"
        });
    };
    return Car;
  };

  // class Pub extends Model {}
  //   Pub.init({
  //     name: { type: Sequelize.STRING },
  //     address: { type: Sequelize.STRING },
  //     latitude: {
  //       type: Sequelize.INTEGER,
  //       allowNull: true,
  //       defaultValue: null,
  //       validate: { min: -90, max: 90 }
  //     },
  //     longitude: {
  //       type: Sequelize.INTEGER,
  //       allowNull: true,
  //       defaultValue: null,
  //       validate: { min: -180, max: 180 }
  //     },
  //   }, {
  //     validate: {
  //       bothCoordsOrNone() {
  //         if ((this.latitude === null) !== (this.longitude === null)) {
  //           throw new Error('Require either both latitude and longitude or neither')
  //         }
  //       }
  //     },
  //     sequelize,
  //   })