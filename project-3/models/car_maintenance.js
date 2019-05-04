module.exports = function(sequelize, DataTypes) {
    var Car_Maintenance = sequelize.define(
      "Car_Maintenance",
      {
        plate: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        freezeTableName: true
      }
    );
    // Car_Maintenance.associate = function(models) {
    //     Car_Maintenance.belongsTo(models.Car, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     }),
    //     Car_Maintenance.belongsTo(models.Maintenance, {
    //         foreignKey: {
    //           allowNull: false
    //         }
    //       });
    // };
    return Car_Maintenance;
  };