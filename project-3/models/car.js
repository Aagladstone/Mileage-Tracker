module.exports = function(sequelize, DataTypes) {
    var Car = sequelize.define(
      "Car",
      {
        plate: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [45]
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [45]
        }
      },
      {
        freezeTableName: true
      }
    );
    Car.associate = function(models) {
        Car.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        }),
        Car.User.hasMany(models.Trip, {
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